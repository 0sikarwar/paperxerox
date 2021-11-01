import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Tabs from '../../components/NativeComponents/Tabs';
import {Text} from '../../components/NativeComponents/Text';
import NewsCards from '../../components/NewsCards';
import {useAppContext} from '../../context/AppContext';
import {primaryColor} from '../../styles/Color';
import {getDataFromStorage, getFeeds} from '../../utils';
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
    Actions: {setIsHindi, setFeedsData},
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
  function headerRightComp() {
    return (
      <TouchableOpacity onPress={() => setIsHindi(!state.isHindi)}>
        <Text color={primaryColor}>
          {state.isHindi ? 'Read in English' : 'हिंदी में पढ़ें'}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={{flex: 1}}>
      <Header rightComponent={headerRightComp} />
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
      <Footer />
    </View>
  );
};

export default NewsScreen;
