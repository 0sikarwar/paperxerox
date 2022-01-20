import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import SideMenu from './components/SideMenu';
import SignIn from './components/SignIn';
import {ContextProvider} from './context/AppContext';
import Navigations from './Navigations';
import Styles from './styles/GlobalStyles';

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
const App: React.FC = () => {
  return (
    <SafeAreaView style={Styles.AndroidSafeArea}>
      <ContextProvider>
        <NavigationContainer theme={navigatorTheme}>
          <Navigations />
          <SignIn />
          <SideMenu />
        </NavigationContainer>
      </ContextProvider>
    </SafeAreaView>
  );
};

export default App;
