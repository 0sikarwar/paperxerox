import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Styles, {welcomeImage} from './style';
import {useNavigation} from '@react-navigation/native';
import {Heading1, Text} from '../../components/NativeComponents/Text';
import Modal from '../../components/NativeComponents/Modal';
import Button from '../../components/NativeComponents/Button';
import {primaryColor, secondaryColor} from '../../styles/Color';
import SignIn from '../../components/SignIn';
import {common} from '../commonInterfaces';
interface welcomeScreenProps extends common {}
const WelcomScreen: React.FC<welcomeScreenProps> = props => {
  const [activeTabName, setActiveTabName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const handleSignInUpClick = (name: string) => {
    setActiveTabName(name);
    setShowModal(true);
  };
  console.log(`props`, props);
  return (
    <>
      <View style={Styles.imageContainer}>
        <TouchableOpacity
          style={Styles.skipTextContainer}
          onPress={() => props.navigation.navigate('home')}>
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
          title="Lognin"
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
        <Modal
          showModal={showModal}
          onRequestClose={() => setShowModal(false)}
          slideFrom="bottom">
          <SignIn
            activeTabName={activeTabName}
            setActiveTabName={setActiveTabName}
          />
        </Modal>
      </View>
    </>
  );
};

export default WelcomScreen;
