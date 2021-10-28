const appReducer = (state: object, action: {type: string; value?: any}) => {
  console.log({state, action});
  switch (action.type) {
    case 'showSignIn':
      return {
        ...state,
        isShowingSignInModal: true,
        signModalActiveTabName: action.value || 'login',
      };
    case 'setActiveSignModalTabName':
      return {
        ...state,
        signModalActiveTabName: action.value,
      };
    case 'hideSignIn':
      return {...state, isShowingSignInModal: false};
    case 'showSideMenu':
      return {...state, isShowingMenu: true};
    case 'hideSideMenu':
      return {...state, isShowingMenu: false};
    default:
      return state;
  }
};
export default appReducer;
