import {StyleSheet} from 'react-native';
import GlobalStyles from '../../../styles/GlobalStyles';
import NewsPaper from './defaultNewsPaper.png';
export const defaultPaper = NewsPaper;
export default StyleSheet.create({
  topSection: {padding: 5},
  topSectionHeading: {paddingBottom: 2},
  topSectionText: {fontSize: 12},
  topCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginVertical: 15,
  },
  topCard: {
    ...GlobalStyles.shadowBox,
    width: 145,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 10,
    marginRight: 8,
  },
  topCardImage: {
    width: 130,
    height: 100,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  topCardHeading: {fontSize: 18, fontWeight: '600', marginBottom: 5},
  topCardText: {fontSize: 12, marginBottom: 8, color: '#6B7280'},
  topCardBtn: {
    paddingVertical: 8,
    borderRadius: 8,
  },
});
