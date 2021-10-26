import {StyleSheet} from 'react-native';
import {primaryColor} from '../../styles/Color';
import img from './img.jpeg';

export const welcomeImage = img;

export default StyleSheet.create({
  image: {
    width: 300,
    height: 300,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginBottom: '20%',
  },
  text: {
    textAlign: 'center',
    width: '100%',
  },
  button: {
    width: '80%',
    marginVertical: 8,
  },
  policyText: {
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
  },
  skipTextContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingRight: 10,
    paddingTop: 20,
  },
  skipText: {
    color: primaryColor,
  },
});
