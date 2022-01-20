import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Tabs from '../../components/NativeComponents/Tabs';
import NewsCards from '../../components/NewsCards';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import {getFeeds} from '../../utils/feedsHelper';
import {common} from '../commonInterfaces';
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
  useEffect(() => {
    getFeeds(state.feedsData, setFeedsData);
  }, []);
  useEffect(() => {
    let currentFeed =
      state.feedsData[state.isHindi ? 'hindi' : 'english'][activeNewsTab];
    console.log(`object`, activeNewsTab, currentFeed);
    if (!currentFeed) {
      currentFeed = state.feedsData[state.isHindi ? 'hindi' : 'english'].top;
    }
    setFeeds(currentFeed);
  }, [activeNewsTab, state.isHindi]);
  return (
    <View style={{flex: 1}}>
      <View>
        <Tabs
          tabList={tabs}
          onPress={setActiveNewsTab}
          showUnderLineOnActive
          underLineColor={primaryColor}
          activeTabName={activeNewsTab}
          tabStyle={{fontSize: 11}}
          labelKeyName={state.isHindi ? 'label2' : ''}
        />
      </View>
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
