import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Navigations from './Navigations';
import Styles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <SafeAreaView style={Styles.AndroidSafeArea}>
      <Navigations />
    </SafeAreaView>
  );
};

export default App;
