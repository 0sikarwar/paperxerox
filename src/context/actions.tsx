const actions = (dispatch: Function) => {
  return {
    showSignIn: (tabName?: string) =>
      dispatch({type: 'showSignIn', value: tabName}),
    setActiveSignModalTabName: (tabName: string) =>
      dispatch({type: 'setActiveSignModalTabName', value: tabName}),
    hideSignIn: () => dispatch({type: 'hideSignIn'}),
    showSideMenu: () => dispatch({type: 'showSideMenu'}),
    hideSideMenu: () => dispatch({type: 'hideSideMenu'}),
  };
};

export default actions;
