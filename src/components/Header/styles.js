import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import img from './hamburger.png';

export const menuIcon = img;

export default StyleSheet.create({
  headerContainer: {
    ...GlobalStyles.shadowBox,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.05,
    marginTop: 0,
    marginBottom: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});
