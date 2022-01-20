import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import CircleUserLogo from '../../icons/CircleUserLogo';
import EditLogo from '../../icons/EditLogo';
import FeedbackLogo from '../../icons/FeedbackLogo';
import LangLogo from '../../icons/langLogo';
import RightArrowLogo from '../../icons/rightArrowLogo';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import Modal from '../NativeComponents/Modal';
import {Heading2, Text} from '../NativeComponents/Text';
import ListItem from './ListItem';
import Styles from './style';

const SideMenu = () => {
  const {
    state: {isShowingMenu, userDetails},
    Actions: {hideSideMenu, showSignIn, setUserDetails},
  } = useAppContext();
  const navigation = useNavigation();
  const handleSigninClick = () => {
    showSignIn();
    hideSideMenu();
  };
  const listGroupItemArray = [
    {text: 'Change Language', logo: <LangLogo />},
    {text: 'Feedback', logo: <FeedbackLogo />},
  ];
  const handleLogout = () => {
    setUserDetails(null);
    hideSideMenu();
  };
  const handleAccSettingClick = () => {
    // @ts-ignore
    navigation.navigate('account');
    hideSideMenu();
  };
  return (
    <>
      <Modal
        showModal={!!isShowingMenu}
        onRequestClose={hideSideMenu}
        slideFrom="left">
        <View style={Styles.sideBarContainer}>
          <ListItem
            onPress={handleSigninClick}
            style={[
              Styles.profileBlock,
              userDetails ? {shadowColor: 'white'} : '',
            ]}
            disabled={!!userDetails}>
            <View style={Styles.listContent}>
              <View style={Styles.profileBlockLogoContainer}>
                <CircleUserLogo width={60} height={60} strokeWidth={0.5} />
              </View>
              {userDetails ? (
                <View>
                  <Heading2 style={{paddingBottom: 0}}>
                    {userDetails.firstname} {userDetails.lastname || ''}
                  </Heading2>
                  <Text color="grey" style={{fontSize: 10}}>
                    ({userDetails.email})
                  </Text>
                </View>
              ) : (
                <Text color={primaryColor}>Login/Register</Text>
              )}
            </View>
          </ListItem>
          {userDetails && (
            <ListItem style={Styles.listGroup} onPress={handleAccSettingClick}>
              <View style={[Styles.listContent, Styles.listGroupItem]}>
                <View style={Styles.listContent}>
                  <View style={Styles.listLogoContainer}>
                    <CircleUserLogo />
                  </View>
                  <Text>Account setting</Text>
                </View>
                <View style={Styles.listLogoContainer}>
                  <EditLogo />
                </View>
              </View>
            </ListItem>
          )}
          <View style={[Styles.listItem, Styles.listGroup]}>
            {listGroupItemArray.map((obj, index) => (
              <TouchableOpacity key={index}>
                <View style={[Styles.listContent, Styles.listGroupItem]}>
                  <View style={Styles.listContent}>
                    <View style={Styles.listLogoContainer}>{obj.logo}</View>
                    <Text>{obj.text}</Text>
                  </View>
                  <View style={Styles.listLogoContainer}>
                    <RightArrowLogo />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
          {userDetails && (
            <View style={Styles.logoutBtnContainer}>
              <Button
                title="Logout"
                color="#EB4646"
                textColor="white"
                onPress={handleLogout}
                style={Styles.logoutBtn}
              />
            </View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default SideMenu;
