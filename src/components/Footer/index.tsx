import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import HomeLogo from '../../icons/HomeLogo';
import ListLogo from '../../icons/ListLogo';
import UserLogo from '../../icons/UserLogo';
import Styles from './style';

const Footer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const RoutesArr = navigation.getState().routes;
  const activeScreen = RoutesArr[RoutesArr.length - 1].name;
  const handleNavigationClick = (name: string) => {
    navigation.push(name);
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
