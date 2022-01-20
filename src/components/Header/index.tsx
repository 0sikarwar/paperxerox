import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import BackArrowLogo from '../../icons/BackArrowLogo';
import {primaryColor} from '../../styles/Color';
import {Heading1, Text} from '../NativeComponents/Text';
import Styles, {menuIcon} from './styles';
interface headerProps {
  showBackBtn?: Boolean;
  activeScreen: string;
  title?: string;
}
interface newsRightCompProps {
  isHindi: boolean;
  setIsHindi: Function;
}
const NewsHeaderRightComp: React.FC<newsRightCompProps> = ({
  isHindi,
  setIsHindi,
}) => {
  return (
    <TouchableOpacity onPress={() => setIsHindi(!isHindi)}>
      <Text color={primaryColor}>
        {isHindi ? 'Read in English' : 'हिंदी में पढ़ें'}
      </Text>
    </TouchableOpacity>
  );
};

const Header: React.FC<headerProps> = ({showBackBtn, title, activeScreen}) => {
  const navigation = useNavigation();
  const {
    state,
    Actions: {showSideMenu, setIsHindi},
  } = useAppContext();
  let rightComponent: any;
  if (activeScreen === 'news') {
    rightComponent = (
      <NewsHeaderRightComp isHindi={state.isHindi} setIsHindi={setIsHindi} />
    );
  }
  return (
    <>
      <View style={Styles.headerContainer}>
        {!showBackBtn ? (
          <TouchableOpacity onPress={showSideMenu}>
            <Image source={menuIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <BackArrowLogo />
          </TouchableOpacity>
        )}
        {!!title && <Heading1>{title}</Heading1>}
        <View>{!!rightComponent && rightComponent}</View>
      </View>
    </>
  );
};

export default Header;
