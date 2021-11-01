const appReducer = (state: object, action: {type: string; value?: any}) => {
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
    case 'setWelcomeScreenFlag':
      return {...state, showWelcomeScr: action.value};
    case 'setFeedsData':
      return {...state, feedsData: action.value};
    case 'setScreenLoader':
      return {...state, showScreenLoader: action.value};
    case 'setIsHindi':
      return {...state, isHindi: action.value};
    default:
      return state;
  }
};
export default appReducer;
