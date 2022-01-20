import React from 'react';
import {View} from 'react-native';
import Styles from './style';
import {primaryColor, secondaryColor} from '../../styles/Color';
import {Heading1, Text} from '../../components/NativeComponents/Text';
import Button from '../../components/NativeComponents/Button';
import {useAppContext} from '../../context/AppContext';
import {common} from '../commonInterfaces';

interface accountScreenProps extends common {}
const AccountScreen: React.FC<accountScreenProps> = props => {
  const {
    Actions: {showSignIn},
    state: {userDetails},
  } = useAppContext();
  const handleSignInUpClick = (name: string) => {
    showSignIn(name);
  };
  return (
    <View style={{flex: 1, height: 100}}>
      {userDetails ? (
        <Heading1>
          welcome {userDetails.firstname} ({userDetails.email})
        </Heading1>
      ) : (
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
      )}
    </View>
  );
};

export default AccountScreen;
