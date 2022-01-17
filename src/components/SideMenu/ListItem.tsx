import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {Heading1} from '../NativeComponents/Text';
import Styles from './style';

interface listItemProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
}
const ListItem: React.FC<listItemProps> = ({children, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[Styles.listItem, style]}>{children}</View>
    </TouchableOpacity>
  );
};

export default ListItem;
