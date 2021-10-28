import {parseString} from 'react-native-xml2js';

export const getRssFeedData = async url => {
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

export const fetchRssData = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.text())
      .then(str =>
        parseString(str, function (err, result) {
          if (err) reject(err);
          resolve(result?.rss?.channel[0]);
        }),
      );
  });
};
