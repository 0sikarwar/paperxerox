import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import {Heading1} from '../../components/NativeComponents/Text';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Heading1>Test</Heading1>
    </View>
  );
};

export default HomeScreen;
