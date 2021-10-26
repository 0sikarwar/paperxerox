import {StyleSheet} from 'react-native';
import {primaryColor} from '../../styles/Color';

export default StyleSheet.create({
  activeTabStyle: {
    color: primaryColor,
  },
  formContainer: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
  formBtn: {
    width: '80%',
    marginTop: 15,
  },
});
