import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Tabs from '../../components/NativeComponents/Tabs';
import {Text} from '../../components/NativeComponents/Text';
import NewsCards from '../../components/NewsCards';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import {getFeeds} from '../../utils/feedsHelper';
import {common} from '../commonInterfaces';
import Styles from './styles';
interface newsScreenProps extends common {}
const tabs = [
  {name: 'top', label: `Editor's Pick`, label2: 'संपादक की पसंद'},
  {name: 'breaking', label: 'Breaking News', label2: 'ताज़ा खबर'},
  {name: 'city', label: 'City News', label2: 'शहर समाचार'},
];
const NewsScreen: React.FC<newsScreenProps> = props => {
  const [activeNewsTab, setActiveNewsTab] = useState('top');
  const {
    state,
    Actions: {setFeedsData},
  } = useAppContext();
  const [feeds, setFeeds] = useState({});
  const [isNewsLoading, setIsNewsLoading] = useState(false);
  useEffect(() => {
    getFeeds(state.feedsData, setFeedsData);
  }, []);
  useEffect(() => {
    let currentFeed =
      state.feedsData[state.isHindi ? 'hindi' : 'english'][activeNewsTab];
    if (!currentFeed) {
      currentFeed = state.feedsData[state.isHindi ? 'hindi' : 'english'].top;
    }
    setFeeds(currentFeed);
  }, [activeNewsTab, state.isHindi]);
  // useEffect(() => {
  //   setIsNewsLoading(true);
  //   setTimeout(() => {
  //     setIsNewsLoading(false);
  //   }, 500);
  // }, [state.isHindi]);
  const handleTabChange = (val: string) => {
    setActiveNewsTab(val);
    setIsNewsLoading(true);
    setTimeout(() => {
      setIsNewsLoading(false);
    }, 200);
  };
  if (!state.feedsData) {
    <View style={Styles.loaderContainer}>
      <ActivityIndicator size="large" color={primaryColor} />
      <Text color="#000">Fetching News...</Text>
    </View>;
  }
  return (
    <View style={{flex: 1}}>
      <View>
        <Tabs
          tabList={tabs}
          onPress={handleTabChange}
          showUnderLineOnActive
          underLineColor={primaryColor}
          activeTabName={activeNewsTab}
          tabStyle={{fontSize: 11}}
          labelKeyName={state.isHindi ? 'label2' : ''}
        />
      </View>
      {isNewsLoading && (
        <View style={Styles.loaderContainer}>
          <ActivityIndicator size="large" color={primaryColor} />
          <Text color="#000">Loading...</Text>
        </View>
      )}
      {!!Object.keys(feeds).length && (
        <NewsCards
          feeds={feeds}
          isHindi={state.isHindi}
          activeNewsTab={activeNewsTab}
        />
      )}
    </View>
  );
};

export default NewsScreen;
