import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import Modal from '../NativeComponents/Modal';
import {Text} from '../NativeComponents/Text';
import ListItem from './ListItem';
import Styles, {defaultUserImg} from './style';

const SideMenu = () => {
  const {
    state: {isShowingMenu},
    Actions: {hideSideMenu, showSignIn},
  } = useAppContext();
  const handleSigninClick = () => {
    showSignIn();
    hideSideMenu();
  };
  return (
    <>
      <Modal
        showModal={!!isShowingMenu}
        onRequestClose={hideSideMenu}
        slideFrom="left">
        <View style={Styles.sideBarContainer}>
          <ListItem onPress={handleSigninClick}>
            <View style={Styles.listContent}>
              <View style={Styles.userImageContainer}>
                <Image source={defaultUserImg} style={Styles.userImage} />
              </View>
              <Text color={primaryColor}>Login/Register</Text>
            </View>
          </ListItem>
        </View>
      </Modal>
    </>
  );
};

export default SideMenu;
