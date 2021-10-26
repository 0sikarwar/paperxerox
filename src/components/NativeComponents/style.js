import {StyleSheet, Dimensions} from 'react-native';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  text: {
    fontSize: 16,
  },
  heading1: {
    fontSize: 22,
    fontWeight: '600',
    paddingVertical: 10,
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
    marginHorizontal: 10,
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
  },
  tabHeading: {
    fontWeight: '600',
    color: '#89909E',
    fontSize: 20,
    paddingBottom: 10,
  },
  inputContainer: {
    margin: 12,
    width: '100%',
  },
  inputLabel: {
    fontWeight: '600',
    marginBottom: 10,
    fontSize: 18,
    marginLeft: 10,
  },
  inputLabelBlured: {
    color: '#89909E',
  },
  inputField: {
    height: 60,
    borderRadius: 12,
    borderColor: '#9CA3AF',
    borderWidth: 1,
    padding: 10,
  },
});
