import React, { Component } from 'react';

import '../../scss/users/Users.scss';

import { Container, Row } from 'reactstrap';

import John from '../../img/john.png';

import Nina from '../../img/nina.png';

import Alex from '../../img/alex.png';

import Ann from '../../img/ann.png';

import Patric from '../../img/patric.png';

import Nicky from '../../img/nicky.png';

import Jane from '../../img/jane.png';

import map from 'lodash/map';

import keyIndex from 'react-key-index';

import shortid from 'shortid';

import UserItem from "../users/UserItem";

const usersOnPageNumber = 7;

const defaultUsers = [
    {
        icon: John,
        name: 'John Doe',
        position: 'CEO',
        activity: 'online',
        email: 'johndoe@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Nina,
        name: 'Nina Jones',
        position: 'UX designer',
        activity: 'online',
        email: 'ninajones@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Alex,
        name: 'Alex Smith',
        position: 'Web Designer',
        activity: 'online',
        email: 'alexsmith@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Ann,
        name: 'Ann Clooney',
        position: 'Account Manager',
        activity: '20 minutes',
        email: 'annclooney@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Patric,
        name: 'Patric Smith',
        position: 'Project Manager',
        activity: '20 minutes',
        email: 'patricsmith@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Nicky,
        name: 'Nicky Hunt',
        position: 'Product Designer',
        activity: '1 hour',
        email: 'nickyhunt@design.com',
        phone: '(000) 111 222 333'
    },
    {
        icon: Jane,
        name: 'Jane Doe',
        position: 'Graphic Designer',
        activity: '2 days',
        email: 'janedoe@design.com',
        phone: '(000) 111 222 333'
    }
];

const getUsers = (number) => {
    let a = Math.floor(number/usersOnPageNumber), users = [];
    for (let i=0; i<a; i++)
        users = users.concat(defaultUsers);
    if (users.length !== number) users = users.concat(defaultUsers.slice(0, number%usersOnPageNumber));
    return users;
};

const addKeys = (arr) => arr.map((item) =>
    Object.assign(item, {
        key: shortid.generate()
    }));

const comparator = {
    activity: (u1, u2) => {
        if (u1.activity==='online' && u2.activity!=='online') return -1;
        else if (u2.activity==='online' && u1.activity!=='online') return 1;
    },
    alphabetize: (u1, u2) => {
        return u1.name.localeCompare(u2.name);
    }
};

class Users extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: addKeys(getUsers(7)),
            viewType: 'activity',
            pageNumber: 0
        };

        this.onViewChange = this.onViewChange.bind(this);
    }

    onViewChange(event) {
        this.setState({
            viewType: event.target.value
        })
    }

    //TODO: make sorts, pagination

    render() {
        let visibleUsers = this.state.users.sort(comparator[this.state.viewType]);
        visibleUsers = visibleUsers.slice(
        usersOnPageNumber*this.state.pageNumber,
        Math.min(usersOnPageNumber*(this.state.pageNumber + 1), this.state.users.length));


        return (
          <section className='users page-content'>

              <Container>

                  <Row noGutters className='users-header'>

                      <h2 className='users-title'>
                          Users <span className='users-number'>
                          ({128})
                          </span>
                      </h2>

                      <div className='users-view-wrapper'>

                          <select className='users-view' onChange={this.onViewChange}>

                              <option value='activity'>Active first</option>

                              <option value='alphabetize'>Alphabetize</option>

                          </select>

                      </div>

                  </Row>

                  <Row noGutters className='users-list-legend'>

                      <span>Name</span>

                      <span>Last activity</span>

                      <span>Mail</span>

                      <span>Phone</span>

                  </Row>

                  <ul className='users-list row no-gutters'>

                      {
                          map(visibleUsers, (item) =>
                          <UserItem icon={item.icon} key={item.key}
                            name={item.name} position={item.position}
                            activity={item.activity} phone={item.phone}
                            email={item.email} location={item.key}/>)
                      }

                  </ul>

              </Container>

          </section>
        );
    }
}

export default Users;