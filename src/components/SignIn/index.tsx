import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import {validateEmail} from '../../utils';
import {usePost} from '../../utils/apiHelper';
import {registerUrl, signinUrl} from '../../utils/constant';
import Button from '../NativeComponents/Button';
import {Input} from '../NativeComponents/Input';
import Modal from '../NativeComponents/Modal';
import Tabs from '../NativeComponents/Tabs';
import {Text} from '../NativeComponents/Text';
import styles from './style';

interface formValueType {
  name?: string;
  email: string;
  password: string;
  password1?: string;
}
const tabs = [
  {name: 'create', label: 'Create Account'},
  {name: 'login', label: 'Login'},
];

const INITIAL_ERROR_OBJ = {
  name: false,
  email: false,
  password: false,
  password1: false,
};
const SignIn: React.FC = props => {
  const {
    state: {isShowingSignInModal, signModalActiveTabName},
    Actions: {
      setActiveSignModalTabName,
      hideSignIn,
      setScreenLoader,
      showSignIn,
      setUserDetails,
    },
  } = useAppContext();
  const [formValue, setFormValue] = useState<formValueType>({
    name: '',
    email: '',
    password: '',
    password1: '',
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [formErr, setFormErr] = useState(INITIAL_ERROR_OBJ);

  useEffect(() => {
    const temp = {...formValue};
    if (signModalActiveTabName === 'create') {
      temp.name = '';
      temp.password1 = '';
    } else {
      delete temp.name;
      delete temp.password1;
    }
    temp.password = '';
    setFormErr(INITIAL_ERROR_OBJ);
    setFormValue({...temp});
    if (errorMsg) {
      setErrorMsg('');
    }
  }, [signModalActiveTabName]);

  const handleChange = (name: string, value: string) => {
    // @ts-ignore
    if (formErr[name]) {
      setFormErr({
        ...formErr,
        [name]: false,
      });
    }
    if (errorMsg) {
      setErrorMsg('');
    }
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const validateInputs = () => {
    let flag = true;
    const tempErrObj = {...formErr};
    if (!validateEmail(formValue.email)) {
      tempErrObj.email = true;
      flag = false;
    }
    if (
      signModalActiveTabName === 'create' &&
      formValue.password !== formValue.password1
    ) {
      tempErrObj.password1 = true;
      flag = false;
    }
    if (!flag) {
      setFormErr(tempErrObj);
    }
    return flag;
  };

  const handleSubmit = async () => {
    if (validateInputs()) {
      setScreenLoader(true);
      hideSignIn();
      const res = await usePost(
        signModalActiveTabName === 'create' ? registerUrl : signinUrl,
        formValue,
      );
      console.log('signin/create res', res);
      if (!res.success) {
        setErrorMsg(res.msg);
        setFormErr({...formErr, [res.errField]: true});
        showSignIn(signModalActiveTabName);
      } else {
        setUserDetails(res.userDetails);
      }

      setScreenLoader(false);
    }
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
            placeholder="Eg namaemail@email.com"
            value={formValue.email}
            onChange={handleChange}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCompleteType="email"
            error={formErr.email}
          />
          <Input
            label="Password"
            name="password"
            placeholder="**** **** ****"
            value={formValue.password}
            onChange={handleChange}
            error={formErr.password}
            secureTextEntry
          />
          {signModalActiveTabName === 'create' && (
            <Input
              label="Retype Password"
              name="password1"
              placeholder="**** **** ****"
              value={formValue.password1}
              onChange={handleChange}
              error={formErr.password1}
              secureTextEntry
            />
          )}
          {!!errorMsg && <Text color="red">{errorMsg}</Text>}
          <Button
            title={
              signModalActiveTabName === 'create' ? 'Registration' : 'Login'
            }
            onPress={handleSubmit}
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
