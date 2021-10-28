import React from 'react';
import {Image, View} from 'react-native';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import {Text} from '../NativeComponents/Text';
import Styles, {defaultPaper} from './style';

const BottomCard = () => {
  return (
    <View style={Styles.bottomCard}>
      <Image source={defaultPaper} style={Styles.bottomCardImage} />
      <View style={Styles.bottomCardContent}>
        <Text style={Styles.bottomCardHeading}>Test Name Lorem ipsum</Text>
        <View style={Styles.bottomCardTextContent}>
          <Text style={Styles.bottomCardText}>Lorem ipsum dolor sit amet</Text>
          <Button
            color={primaryColor}
            textColor="#fff"
            title="Book"
            onPress={() => console.log('terst')}
            style={Styles.bottomCardBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default BottomCard;
