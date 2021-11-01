import React from 'react';
import {View} from 'react-native';
import Footer from '../../components/Footer';
import {Heading1} from '../../components/NativeComponents/Text';
const AccountScreen = () => {
  return (
    <View style={{flex: 1, height: 100}}>
      <Heading1>TEST</Heading1>
      <Footer />
    </View>
  );
};

export default AccountScreen;
