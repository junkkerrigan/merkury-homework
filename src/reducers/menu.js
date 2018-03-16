const initialState = {
  isFixedMenuOpen: false
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        isFixedMenuOpen: !state.isFixedMenuOpen
      };
    default:
      return state;
  }
};

export default menu;