import React from 'react';
import {View} from 'react-native';
import {Heading1, Text} from '../../NativeComponents/Text';
import BottomCard from './BottomCard';
import Styles from './style';
const BottomCards = () => {
  return (
    <View style={Styles.bottomSection}>
      <Heading1 style={Styles.bottomSectionHeading}>Bottom Something </Heading1>
      <Text style={Styles.bottomSectionText}>
        Quisque posuere pharetra ipsum, ut molestie.
      </Text>
      <View style={Styles.bottomCardContainer}>
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
        <BottomCard />
      </View>
    </View>
  );
};

export default BottomCards;
