import React from 'react';
import {View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomScreen from './screens/WelcomeScreen';
import Styles from './styles/GlobalStyles';

const Stack = createNativeStackNavigator();
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
const Navigations = () => {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <View style={Styles.ScreenViewArea}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="welcome"
            component={WelcomScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Navigations;
