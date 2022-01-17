import React, {useEffect} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Styles, {welcomeImage} from './style';
import {Heading1, Text} from '../../components/NativeComponents/Text';
import Button from '../../components/NativeComponents/Button';
import {primaryColor, secondaryColor} from '../../styles/Color';
import {common} from '../commonInterfaces';
import {useAppContext} from '../../context/AppContext';
import {addInStorage} from '../../utils';

interface welcomeScreenProps extends common {}

const WelcomScreen: React.FC<welcomeScreenProps> = props => {
  const {
    Actions: {showSignIn},
  } = useAppContext();
  const handleSignInUpClick = (name: string) => {
    showSignIn(name);
  };
  const handleSkipClick = () => {
    props.navigation.navigate('home');
    addInStorage('skipWelcome', 'true');
  };
  return (
    <>
      <View style={Styles.imageContainer}>
        <TouchableOpacity
          style={Styles.skipTextContainer}
          onPress={handleSkipClick}>
          <Text style={Styles.skipText}> Skip</Text>
        </TouchableOpacity>
        <Image source={welcomeImage} style={Styles.image} />
        <Heading1>Welcome</Heading1>
        <Text style={Styles.text}>
          Before enjoying services {'\n'}
          Please register first
        </Text>
      </View>
      <View style={Styles.buttonContainer}>
        <Button
          title="Create Account"
          onPress={() => {
            handleSignInUpClick('create');
          }}
          color={primaryColor}
          textColor="#fff"
          style={Styles.button}
        />
        <Button
          title="Login"
          onPress={() => {
            handleSignInUpClick('login');
          }}
          color={secondaryColor}
          textColor={primaryColor}
          style={Styles.button}
        />
        <Text style={Styles.policyText}>
          By logging in or registering, you have agreed to{' '}
          <Text style={{color: primaryColor}}> The Terms and Conditions</Text>{' '}
          and <Text style={{color: primaryColor}}>Privacy Policy</Text>.
        </Text>
      </View>
    </>
  );
};

export default WelcomScreen;
