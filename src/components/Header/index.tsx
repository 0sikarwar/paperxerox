import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Modal from '../NativeComponents/Modal';
import {Text} from '../NativeComponents/Text';
import SignIn from '../SignIn';
import {menuIcon} from './styles';
const Header = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [activeTabName, setActiveTabName] = useState('');
  const handleSigninClick = () => {
    setShowSideMenu(false);
    setActiveTabName('login');
  };
  return (
    <>
      <View>
        <TouchableOpacity onPress={() => setShowSideMenu(true)}>
          <Image source={menuIcon} />
        </TouchableOpacity>
      </View>
      <Modal
        showModal={showSideMenu}
        onRequestClose={() => setShowSideMenu(false)}
        slideFrom="left">
        <TouchableOpacity onPress={handleSigninClick}>
          <Text>Login/Register</Text>
        </TouchableOpacity>
      </Modal>
      <Modal
        showModal={!!activeTabName}
        onRequestClose={() => setActiveTabName('')}
        slideFrom="bottom">
        <SignIn
          activeTabName={activeTabName}
          setActiveTabName={setActiveTabName}
        />
      </Modal>
    </>
  );
};

export default Header;
