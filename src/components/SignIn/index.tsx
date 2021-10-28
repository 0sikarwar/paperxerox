import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import {Input} from '../NativeComponents/Input';
import Modal from '../NativeComponents/Modal';
import Tabs from '../NativeComponents/Tabs';
import styles from './style';

interface formValueType {
  name?: string;
  email: string;
  password: string;
}
const tabs = [
  {name: 'create', label: 'Create Account'},
  {name: 'login', label: 'Login'},
];
const SignIn: React.FC = props => {
  const {
    state: {isShowingSignInModal, signModalActiveTabName},
    Actions: {setActiveSignModalTabName, hideSignIn},
  } = useAppContext();
  const [formValue, setFormValue] = useState<formValueType>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const temp = {...formValue};
    if (signModalActiveTabName === 'create') {
      temp.name = '';
    } else {
      delete temp.name;
    }
    temp.password = '';
    setFormValue({...temp});
  }, [signModalActiveTabName]);

  const handleChange = (name: string, value: string) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <Modal
      showModal={!!isShowingSignInModal}
      onRequestClose={hideSignIn}
      slideFrom="bottom">
      <View>
        <Tabs
          tabList={tabs}
          activeTabStyle={styles.activeTabStyle}
          onPress={setActiveSignModalTabName}
          showUnderLineOnActive
          underLineColor={primaryColor}
          activeTabName={signModalActiveTabName}
        />
        <View style={styles.formContainer}>
          {signModalActiveTabName === 'create' && (
            <Input
              label="Full Name"
              name="name"
              placeholder="Enter your full name"
              value={formValue.name}
              onChange={handleChange}
              textContentType="name"
              autoCompleteType="name"
            />
          )}
          <Input
            label="Email address"
            name="email"
            placeholder="Eg namaemail@emailkamu.com"
            value={formValue.email}
            onChange={handleChange}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCompleteType="email"
          />
          <Input
            label="Password"
            name="password"
            placeholder="**** **** ****"
            value={formValue.password}
            onChange={handleChange}
            secureTextEntry
          />
          <Button
            title={
              signModalActiveTabName === 'create' ? 'Registration' : 'Login'
            }
            onPress={() => {
              console.log(signModalActiveTabName);
            }}
            color={primaryColor}
            textColor="#fff"
            style={styles.formBtn}
            isDisabled={Object.values(formValue).includes('')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SignIn;
