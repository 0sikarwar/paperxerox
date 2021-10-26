import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {primaryColor} from '../../styles/Color';
import Button from '../NativeComponents/Button';
import {Input} from '../NativeComponents/Input';
import Tabs from '../NativeComponents/Tabs';
import styles from './style';
interface signinProps {
  activeTabName: string;
  setActiveTabName: Function;
}
interface formValueType {
  name?: string;
  email: string;
  password: string;
}
const tabs = [
  {name: 'create', label: 'Create Account'},
  {name: 'login', label: 'Login'},
];
const SignIn: React.FC<signinProps> = props => {
  const {activeTabName, setActiveTabName} = props;
  const [formValue, setFormValue] = useState<formValueType>({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const temp = {...formValue};
    if (activeTabName === 'create') {
      temp.name = '';
    } else {
      delete temp.name;
    }
    temp.password = '';
    setFormValue({...temp});
  }, [activeTabName]);

  const handleChange = (name: string, value: string) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <View>
      <Tabs
        tabList={tabs}
        activeTabStyle={styles.activeTabStyle}
        onPress={setActiveTabName}
        showUnderLineOnActive
        underLineColor={primaryColor}
        activeTabName={activeTabName}
      />
      <View style={styles.formContainer}>
        {activeTabName === 'create' && (
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
          title={activeTabName === 'create' ? 'Registration' : 'Login'}
          onPress={() => {
            console.log(activeTabName);
          }}
          color={primaryColor}
          textColor="#fff"
          style={styles.formBtn}
          isDisabled={Object.values(formValue).includes('')}
        />
      </View>
    </View>
  );
};

export default SignIn;
