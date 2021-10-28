import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import Styles, {menuIcon} from './styles';
const Header = () => {
  const {
    Actions: {showSideMenu},
  } = useAppContext();
  return (
    <>
      <View style={Styles.headerContainer}>
        <TouchableOpacity onPress={showSideMenu}>
          <Image source={menuIcon} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;
