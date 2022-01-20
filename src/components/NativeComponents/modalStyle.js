import {StyleSheet} from 'react-native';
import {deviceHeight, deviceWidth} from '../../styles/GlobalStyles';
export default StyleSheet.create({
  animatedViewContainer: {
    height: deviceHeight,
    width: deviceWidth,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  modalOverlay: {
    backgroundColor: '#00000080',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    width: '100%',
    borderRadius: 15,
  },
  modalCrossBtn: {
    position: 'absolute',
    right: 5,
    margin: 5,
  },
  bottomModalOverLay: {
    justifyContent: 'flex-end',
    paddingHorizontal: 0,
  },
  bottomModalContainer: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  leftModalOverLay: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 0,
  },
  leftModalContainer: {
    height: '100%',
    width: '75%',
    paddingTop: 50,
  },
});
