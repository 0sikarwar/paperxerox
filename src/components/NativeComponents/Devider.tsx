import React from 'react';
import {StyleSheet, View} from 'react-native';
import styles from './style.js';

interface deviderProps {
  color?: string;
  height?: number;
  width?: number | string;
}

export const DeviderHr: React.FC<deviderProps> = ({color, height, width}) => {
  const componentStyle = StyleSheet.create({
    hr: {
      borderColor: color || 'black',
      borderBottomWidth: height || 1,
      width: width || '100%',
    },
  });
  return <View style={componentStyle.hr} />;
};
