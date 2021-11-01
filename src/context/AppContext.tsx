import React, {createContext, useContext, useReducer} from 'react';
import appReducer from './reducer';
import actions from './actions';

type Dispatch = (action: {type: string; value?: any}) => void;

const AppContext = createContext<{state: any; dispatch: Dispatch} | undefined>(
  undefined,
);

const ContextProvider: React.FC = ({children}) => {
  const initialState = {
    showWelcomeScr: true,
    showScreenLoader: true,
    isHindi: true,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const value = {state, dispatch};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    console.error('useAppContext must be used in child of AppContext provide');
  }
  const Actions = actions(context?.dispatch || Function);
  return {...context, Actions};
};

export {ContextProvider, useAppContext};
