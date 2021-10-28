import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

export default StyleSheet.create({
  footer: {
    ...GlobalStyles.shadowBox,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
  },
  footerFake: {
    height: 50,
  },
});
