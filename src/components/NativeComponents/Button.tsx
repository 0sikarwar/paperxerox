import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import ComponentStyle from './style';
import {Text} from './Text';

interface buttonProps {
  title: React.Component | String;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  style?: Object;
  color?: string;
  textColor?: string;
  isDisabled?: boolean;
}
const Button: React.FC<buttonProps> = ({
  title,
  onPress,
  style,
  color,
  textColor,
  isDisabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        ComponentStyle.button,
        style,
        {backgroundColor: color, opacity: isDisabled ? 0.5 : 1},
      ]}
      disabled={isDisabled}
      {...rest}>
      <Text
        style={[
          ComponentStyle.buttonText,
          {color: textColor, fontWeight: 'bold'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
