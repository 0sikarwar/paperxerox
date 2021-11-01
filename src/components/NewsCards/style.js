import {StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';

export default StyleSheet.create({
  newsCardContainer: {marginVertical: 5, paddingHorizontal: 5},
  newsCard: {...GlobalStyles.shadowBox, marginVertical: 8},
  newsCardHeading: {fontSize: 16, fontWeight: '600', marginBottom: 3},
  newsCardDesc: {fontSize: 14, padding: 3, flex: 1},
  newsCardSrcContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  newsCardSrcName: {fontSize: 10, opacity: 0.6},
  newsCardSrcLink: {fontSize: 12},
  newsCardDescContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: 60,
    height: 60,
    margin: 5,
  },
});
