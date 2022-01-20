import {StyleSheet} from 'react-native';
import {deviceWidth} from '../../styles/GlobalStyles';

export default StyleSheet.create({
  footer: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    width: deviceWidth,
    height: 50,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    borderColor: '#cfcbcb',
    borderTopWidth: 0.3,
  },
  footerFake: {
    height: 50,
  },
});
