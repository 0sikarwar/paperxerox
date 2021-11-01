import React from 'react';
import {ScrollView, View} from 'react-native';
import BottomCards from '../../components/HomeCards/BottomCards';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import TopCards from '../../components/HomeCards/TopCards';

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopCards />
        <BottomCards />
      </ScrollView>
      <Footer />
    </View>
  );
};

export default HomeScreen;
