import {StyleSheet, Platform, StatusBar, Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  ScreenViewArea: {
    paddingHorizontal: 20,
    height: '100%',
  },
  shadowBox: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 10,
    width: '100%',
  },
  screenLoader: {
    flex: 1,
    justifyContent: 'center',
  },
});
