import React from 'react';
import {ScrollView, View} from 'react-native';
import BottomCards from '../../components/HomeCards/BottomCards';
import TopCards from '../../components/HomeCards/TopCards';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopCards />
        <BottomCards />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
