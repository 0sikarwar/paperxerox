import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {decode} from 'html-entities';
import {primaryColor} from '../../styles/Color';
import {Text} from '../NativeComponents/Text';
import Styles from './style';
interface newsCardProps {
  item: any;
  src?: string;
  onPress?: (event: GestureResponderEvent) => void;
}
const NewsCard: React.FC<newsCardProps> = ({item, src, onPress}) => {
  const {title, description, pubDate} = item;
  const imageUrl = description[0].match(/(?<=<img .+src=").*(?=" \/>)/g)?.[0];
  const desc = decode(description[0].replace(/<img.+src=.*\/>/g, '')).trim();
  const headline = decode(title[0]).trim();
  if (!desc) return null;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.newsCard}>
        <Text style={Styles.newsCardHeading}>{headline}</Text>
        <View style={Styles.newsCardDescContainer}>
          {imageUrl && (
            <Image
              source={{
                uri: imageUrl,
              }}
              style={Styles.cardImage}
            />
          )}
          <Text style={Styles.newsCardDesc}>{desc}</Text>
        </View>
        <View style={Styles.newsCardSrcContainer}>
          <Text style={Styles.newsCardSrcName}>
            {pubDate[0].split(' ').slice(0, -1).join(' ')}
          </Text>
          <Text style={Styles.newsCardSrcName}>src: {src}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;
