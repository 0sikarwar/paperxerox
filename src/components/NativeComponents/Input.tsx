import React from 'react';
import {
  TextInput,
  View,
  TextInputProps,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from 'react-native';
import styles from './style';
import {Text} from './Text';

type overrideInputProps = Omit<TextInputProps, 'onChange'>;

interface inputProps extends overrideInputProps {
  label?: string;
  style?: object;
  labelStyle?: object;
  name?: string;
  onChange?: Function;
}

export const Input: React.FC<inputProps> = ({
  value,
  style,
  label,
  labelStyle,
  name,
  onChange,
  ...rest
}) => {
  const handleChange = (text: string) => {
    if (onChange) {
      onChange(name, text);
    }
  };
  return (
    <View style={[styles.inputContainer]}>
      {label && (
        <Text
          style={[
            styles.inputLabel,
            value && styles.inputLabelBlured,
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <TextInput
        style={[styles.inputField, style]}
        value={value}
        onChangeText={handleChange}
        {...rest}
      />
    </View>
  );
};
