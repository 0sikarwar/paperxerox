import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeLogo from '../../icons/HomeLogo';
import ListLogo from '../../icons/ListLogo';
import UserLogo from '../../icons/UserLogo';
import Styles from './style';

interface footerPropType {
  activeScreen: string;
  setActiveScreen: Function;
}
const Footer: React.FC<footerPropType> = ({activeScreen, setActiveScreen}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleNavigationClick = (name: string) => {
    if (activeScreen !== name) {
      navigation.navigate(name);
      setActiveScreen(name);
    }
  };
  return (
    <>
      <View style={Styles.footer}>
        <TouchableOpacity onPress={() => handleNavigationClick('home')}>
          <HomeLogo width={40} height={40} isFill={activeScreen === 'home'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigationClick('news')}>
          <ListLogo width={40} height={40} isFill={activeScreen === 'news'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigationClick('account')}>
          <UserLogo
            width={40}
            height={40}
            isFill={activeScreen === 'account'}
          />
        </TouchableOpacity>
      </View>
      <View style={Styles.footerFake} />
    </>
  );
};

export default Footer;
