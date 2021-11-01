const actions = (dispatch: Function) => {
  return {
    showSignIn: (tabName?: string) =>
      dispatch({type: 'showSignIn', value: tabName}),
    setActiveSignModalTabName: (tabName: string) =>
      dispatch({type: 'setActiveSignModalTabName', value: tabName}),
    hideSignIn: () => dispatch({type: 'hideSignIn'}),
    showSideMenu: () => dispatch({type: 'showSideMenu'}),
    hideSideMenu: () => dispatch({type: 'hideSideMenu'}),
    setWelcomeScreenFlag: (value: boolean) =>
      dispatch({type: 'setWelcomeScreenFlag', value}),
    setFeedsData: (value: any) => dispatch({type: 'setFeedsData', value}),
    setScreenLoader: (value: boolean) =>
      dispatch({type: 'setScreenLoader', value}),
    setIsHindi: (value: boolean) => dispatch({type: 'setIsHindi', value}),
  };
};

export default actions;
