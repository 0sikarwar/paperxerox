import {StyleSheet} from 'react-native';
import NewsPaper from './defaultNewsPaper.png';
import GlobalStyles from '../../styles/GlobalStyles';

export const defaultPaper = NewsPaper;

export default StyleSheet.create({
  bottomSection: {padding: 5},
  bottomSectionHeading: {paddingBottom: 2},
  bottomSectionText: {fontSize: 12},
  bottomCardContainer: {paddingRight: 5, paddingVertical: 10, marginTop: 15},
  bottomCard: {
    ...GlobalStyles.shadowBox,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginBottom: 8,
  },
  bottomCardImage: {
    width: 75,
    height: 75,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
  },
  bottomCardContent: {
    paddingHorizontal: 8,
  },
  bottomCardHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  bottomCardTextContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomCardText: {
    fontSize: 12,
    marginBottom: 8,
    color: '#6B7280',
    width: '45%',
  },
  bottomCardBtn: {
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
  },
});
