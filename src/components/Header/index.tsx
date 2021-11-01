import {useNavigation} from '@react-navigation/core';
import React, {ReactElement} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import BackArrowLogo from '../../icons/BackArrowLogo';
import {Heading1} from '../NativeComponents/Text';
import Styles, {menuIcon} from './styles';
interface headerProps {
  showBackBtn?: Boolean;
  title?: string;
  rightComponent?: () => ReactElement;
}
const Header: React.FC<headerProps> = ({
  showBackBtn,
  title,
  rightComponent,
}) => {
  const navigation = useNavigation();
  const {
    Actions: {showSideMenu},
  } = useAppContext();
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
        <View>{!!rightComponent && rightComponent()}</View>
      </View>
    </>
  );
};

export default Header;
