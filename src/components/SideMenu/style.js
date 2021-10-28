import {StyleSheet} from 'react-native';
import userImg from './user.png';
import GlobalStyles from '../../styles/GlobalStyles';
export const defaultUserImg = userImg;

export default StyleSheet.create({
  sideBarContainer: {},
  listItem: {
    ...GlobalStyles.shadowBox,
    marginVertical: 10,
  },
  listContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImageContainer: {},
  userImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 60 / 2,
  },
});
