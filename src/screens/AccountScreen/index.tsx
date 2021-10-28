import React, {useEffect} from 'react';
import {View} from 'react-native';
import Footer from '../../components/Footer';
import {Heading1} from '../../components/NativeComponents/Text';
import {getRssFeedData} from '../../Utils';
const AccountScreen = () => {
  useEffect(() => {
    const AMAR_UJALA_RSS_URL = `https://www.amarujala.com/rss/editors-pick.xml`;
    getRssFeedData(AMAR_UJALA_RSS_URL).then(res => console.log(`res`, res));
    const TOI_RSS_URL = `https://timesofindia.indiatimes.com/rssfeedstopstories.cms`;
    getRssFeedData(TOI_RSS_URL).then(res => console.log(`TOI_RSS_URL`, res));
  }, []);
  return (
    <View style={{flex: 1, height: 100}}>
      <Heading1>TEST</Heading1>
      <Footer />
    </View>
  );
};

export default AccountScreen;
