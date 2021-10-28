import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {Heading1} from '../NativeComponents/Text';
import Styles from './style';

interface listItemProps {
  onPress?: (event: GestureResponderEvent) => void;
}
const ListItem: React.FC<listItemProps> = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={Styles.listItem}>{children}</View>
    </TouchableOpacity>
  );
};

export default ListItem;
