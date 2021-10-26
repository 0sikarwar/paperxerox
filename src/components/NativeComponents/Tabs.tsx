import React from 'react';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import {DeviderHr} from './Devider';
import {Text} from './Text';
import styles from './style';

interface tabType {
  label: string;
  name: string;
}
interface tapProps {
  tabList: Array<tabType>;
  tabContainerStyle?: object;
  tabStyle?: object;
  activeTabStyle?: object;
  onPress: Function;
  showUnderLineOnActive?: boolean;
  underLineColor?: string;
  activeTabName?: string;
}

const Tabs: React.FC<tapProps> = ({
  tabList,
  tabContainerStyle,
  tabStyle,
  activeTabStyle,
  onPress,
  showUnderLineOnActive,
  underLineColor,
  activeTabName,
}) => {
  return (
    <View style={{}}>
      <View style={[styles.tabContainer, tabContainerStyle]}>
        {tabList.map((item, index) => (
          <TouchableOpacity onPress={() => onPress(item.name)} key={index}>
            <View style={styles.tab}>
              <Text
                style={[
                  styles.tabHeading,
                  tabStyle,
                  activeTabName === item.name && activeTabStyle,
                ]}>
                {item.label}
              </Text>
              {showUnderLineOnActive && activeTabName === item.name && (
                <DeviderHr width="60%" height={2} color={underLineColor} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Tabs;
