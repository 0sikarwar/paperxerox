import React from 'react';
import {
  GestureResponderEvent,
  TouchableOpacity,
  Text as TextRN,
} from 'react-native';
import ComponentStyle from './style';
interface textProps {
  style?: Object;
}
export const Text: React.FC<textProps> = ({style, children, ...rest}) => {
  return (
    <TextRN
      style={[ComponentStyle.text, style]}
      adjustsFontSizeToFit={true}
      {...rest}>
      {children}
    </TextRN>
  );
};

export const Heading1: React.FC<textProps> = ({style, children, ...rest}) => {
  return (
    <TextRN style={[ComponentStyle.heading1, style]} {...rest}>
      {children}
    </TextRN>
  );
};
