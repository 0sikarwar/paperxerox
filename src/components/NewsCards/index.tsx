import {useNavigation} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import NewsCard from './NewsCard';
import Styles from './style';
interface newsCardsProps {
  feeds: {
    feed?: Array<any>;
    srcName?: string;
  };
  isHindi?: boolean;
  activeNewsTab: string;
}
const NewsCards: React.FC<newsCardsProps> = ({
  feeds,
  isHindi,
  activeNewsTab,
}) => {
  const listRef = useRef<FlatList>(null);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [totalVisibleItem, setTotalVisibleItem] = useState(10);
  const handleCardPress = (link: string) => {
    navigation.navigate('webview', {link});
  };
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollToIndex({index: 0});
    }
  }, [isHindi, activeNewsTab]);
  const handleListEndReached = e => {
    console.log(`end EDDDDDD`, e);
  };
  const updateTotalVisibleItem = (viewableItems: any) => {
    const lastItemIndex = viewableItems[viewableItems.length - 1]?.index;
    if (lastItemIndex === totalVisibleItem - 3) {
      setTotalVisibleItem(lastItemIndex + 12);
    }
    console.log(lastItemIndex, totalVisibleItem);
  };
  const onViewableItemsChanged = useCallback(({viewableItems}) => {
    updateTotalVisibleItem(viewableItems);
  }, []);
  console.log(`totalVisibleItem`, totalVisibleItem);
  return (
    <>
      {/* <ScrollView contentContainerStyle={Styles.newsCardContainer}>
        {feeds.feed?.map((item: object, index: number) => (
          <NewsCard
            item={item}
            src={feeds.srcName}
            key={`${feeds.srcName}_${index}`}
            // @ts-ignore
            onPress={() => handleCardPress(item.link[0])}
          />
        ))}
      </ScrollView> */}
      <FlatList
        data={feeds.feed ? [...feeds.feed.slice(0, totalVisibleItem)] : null}
        ref={listRef}
        initialNumToRender={5}
        onEndReached={handleListEndReached}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{itemVisiblePercentThreshold: 100}}
        onEndReachedThreshold={2}
        removeClippedSubviews
        renderItem={({item}) => (
          <NewsCard
            item={item}
            src={feeds.srcName}
            onPress={() => handleCardPress(item.link[0])}
          />
        )}
      />
    </>
  );
};

export default NewsCards;
