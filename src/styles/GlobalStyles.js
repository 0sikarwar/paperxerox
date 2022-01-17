import {StyleSheet, Platform, StatusBar} from 'react-native';

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
    elevation: 20,
  },
  screenLoader: {
    flex: 1,
    justifyContent: 'center',
  },
});
