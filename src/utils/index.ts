// @ts-ignore
import {parseString} from 'react-native-xml2js';
import AsyncStorage from '@react-native-community/async-storage';
import feedUrls from './feedUrls.json';
export const getRssFeedData = async (url: string) => {
  let resp = null;
  if (url) {
    try {
      resp = await fetchRssData(url);
    } catch (err) {
      console.log(`err: `, err);
    }
  }
  return resp;
};

export const fetchRssData = (url: string) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.text())
      .then(str =>
        parseString(str, function (err: object, result: any) {
          if (err) reject(err);
          resolve(result?.rss?.channel[0]);
        }),
      );
  });
};

export const addInStorage = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.log(`Error: `, err);
  }
};

export const getDataFromStorage = async (key: string) => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val && JSON.parse(val);
  } catch (err) {
    console.log(`Error: `, err);
  }
};

export const appInit = async (
  setFeedsData: Function,
  setWelcomeScreenFlag: Function,
  setScreenLoader: Function,
) => {
  const welcomFlag = await getDataFromStorage('skipWelcome');
  setWelcomeScreenFlag(welcomFlag !== 'true');
  setScreenLoader(false);
  const hindiFeed: any = await getRssFeedData(feedUrls.hindiRssFeed.top.url);
  const englishFeed: any = await getRssFeedData(
    feedUrls.englishRssFeed.top.url,
  );
  console.log('Fetching Top feeds');
  const feedData = {
    english: {
      top: {
        feed: englishFeed.item,
        srcName: feedUrls.englishRssFeed.top.srcName,
      },
    },
    hindi: {
      top: {
        feed: hindiFeed.item,
        srcName: feedUrls.hindiRssFeed.top.srcName,
      },
    },
  };
  setFeedsData(feedData);
  addInStorage('feedData', feedData);
};

export const getFeeds = async (currFeedData: any, setFeedsData: Function) => {
  const hindiFeed1: any = await getRssFeedData(
    feedUrls.hindiRssFeed.breaking.url,
  );
  const englishFeed1: any = await getRssFeedData(
    feedUrls.englishRssFeed.breaking.url,
  );
  const hindiFeed2: any = await getRssFeedData(feedUrls.hindiRssFeed.city.url);
  const hindiFeed3: any = await getRssFeedData(feedUrls.hindiRssFeed.city.url2);
  const englishFeed2: any = await getRssFeedData(
    feedUrls.englishRssFeed.city.url,
  );
  const hindiFeeds = [...hindiFeed3.item, ...hindiFeed2.item];
  const feedData = {
    hindi: {
      ...currFeedData.hindi,
      city: {
        feed: hindiFeeds,
        srcName: feedUrls.hindiRssFeed.city.srcName,
      },
      breaking: {
        feed: hindiFeed1.item,
        srcName: feedUrls.hindiRssFeed.breaking.srcName,
      },
    },
    english: {
      ...currFeedData.english,
      city: {
        feed: englishFeed2.item,
        srcName: feedUrls.englishRssFeed.city.srcName,
      },
      breaking: {
        feed: englishFeed1.item,
        srcName: feedUrls.englishRssFeed.breaking.srcName,
      },
    },
  };
  setFeedsData(feedData);
  addInStorage('feedData', feedData);
  console.log('FEEDS DATA SUCCESS', feedData);
};
