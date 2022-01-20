import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {Heading1} from '../NativeComponents/Text';
import Styles from './style';

interface listItemProps {
  onPress?: (event: GestureResponderEvent) => void;
  style?: object;
  disabled?: boolean;
}
const ListItem: React.FC<listItemProps> = ({
  children,
  onPress,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[Styles.listItem, style]}>{children}</View>
    </TouchableOpacity>
  );
};

export default ListItem;
