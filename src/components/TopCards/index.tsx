import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import {Heading1, Text} from '../NativeComponents/Text';
import TopCard from './TopCard';
import Styles from './style';

const TopCards = () => {
  return (
    <View style={Styles.topSection}>
      <Heading1 style={Styles.topSectionHeading}>Top Something </Heading1>
      <Text style={Styles.topSectionText}>
        Quisque posuere pharetra ipsum, ut molestie.
      </Text>
      <ScrollView
        contentContainerStyle={Styles.topCardContainer}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <TopCard />
        <TopCard />
        <TopCard />
      </ScrollView>
    </View>
  );
};

export default TopCards;
