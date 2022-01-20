import {StyleSheet} from 'react-native';
import {deviceWidth} from '../../styles/GlobalStyles';
import img from './hamburger.png';

export const menuIcon = img;

export default StyleSheet.create({
  headerContainer: {
    width: deviceWidth - 40,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#cfcbcb',
    borderBottomWidth: 0.3,
  },
});
