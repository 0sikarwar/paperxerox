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
});
