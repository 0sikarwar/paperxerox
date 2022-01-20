import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

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
  listGroup: {
    paddingHorizontal: 5,
  },
  listGroupItem: {
    justifyContent: 'space-between',
  },
  listLogoContainer: {
    paddingVertical: 12,
    marginHorizontal: 10,
  },
  profileBlock: {
    marginBottom: 20,
  },
  profileBlockLogoContainer: {
    marginRight: 10,
  },
  logoutBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  logoutBtn: {
    ...GlobalStyles.shadowBox,
    borderRadius: 12,
    height: 40,
    paddingVertical: 10,
    width: 120,
  },
});
