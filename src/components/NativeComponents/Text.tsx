import React from 'react';
import {Text as TextRN} from 'react-native';
import ComponentStyle from './style';
interface textProps {
  style?: Object;
  color?: string;
}
export const Text: React.FC<textProps> = ({
  style,
  children,
  color,
  ...rest
}) => {
  return (
    <TextRN
      style={[ComponentStyle.text, style, color ? {color: color} : {}]}
      adjustsFontSizeToFit={true}
      {...rest}>
      {children}
    </TextRN>
  );
};

export const Heading1: React.FC<textProps> = ({
  style,
  children,
  color,
  ...rest
}) => {
  return (
    <TextRN
      style={[ComponentStyle.heading1, style, color ? {color: color} : {}]}
      {...rest}>
      {children}
    </TextRN>
  );
};
export const Heading2: React.FC<textProps> = ({
  style,
  children,
  color,
  ...rest
}) => {
  return (
    <TextRN
      style={[ComponentStyle.heading2, style, color ? {color: color} : {}]}
      {...rest}>
      {children}
    </TextRN>
  );
};
