import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SideMenu from './components/SideMenu';
import SignIn from './components/SignIn';
import {ContextProvider} from './context/AppContext';
import Navigations from './Navigations';
import Styles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={Styles.AndroidSafeArea}>
      <ContextProvider>
        <Navigations />
        <SignIn />
        <SideMenu />
      </ContextProvider>
    </SafeAreaView>
  );
};

export default App;
