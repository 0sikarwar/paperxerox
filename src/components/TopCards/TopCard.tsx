import React from 'react';
import {Image, View} from 'react-native';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import {Text} from '../NativeComponents/Text';
import Styles, {defaultPaper} from './style';

const TopCard = () => {
  return (
    <View style={Styles.topCard}>
      <Image source={defaultPaper} style={Styles.topCardImage} />
      <Text style={Styles.topCardHeading}>Test Name</Text>
      <Text style={Styles.topCardText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </Text>
      <Button
        color={primaryColor}
        textColor="#fff"
        title="Book"
        onPress={() => console.log('terst')}
        style={Styles.topCardBtn}
      />
    </View>
  );
};

export default TopCard;
