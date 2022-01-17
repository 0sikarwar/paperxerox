import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WelcomScreen from './screens/WelcomeScreen';
import AccountScreen from './screens/AccountScreen';
import Styles from './styles/GlobalStyles';
import NewsScreen from './screens/NewsScreen';
import WebviewScreen from './screens/WebviewScreen';
import {appInit} from './utils/feedsHelper';
import {useAppContext} from './context/AppContext';
import {primaryColor} from './styles/Color';

const Stack = createNativeStackNavigator();
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};
const Navigations = () => {
  const {
    Actions: {setFeedsData, setWelcomeScreenFlag, setScreenLoader},
    state,
  } = useAppContext();
  useEffect(() => {
    appInit(setFeedsData, setWelcomeScreenFlag, setScreenLoader);
  }, []);
  if (state.showScreenLoader)
    return (
      <ActivityIndicator
        size="large"
        style={Styles.screenLoader}
        color={primaryColor}
      />
    );
  return (
    <NavigationContainer theme={navigatorTheme}>
      <View style={Styles.ScreenViewArea}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {state.showWelcomeScr && (
            <Stack.Screen
              name="welcome"
              component={WelcomScreen}
              options={{title: 'Welcome'}}
            />
          )}
          <Stack.Screen
            name="home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          <Stack.Screen
            name="news"
            component={NewsScreen}
            options={{title: 'News'}}
          />
          <Stack.Screen
            name="account"
            component={AccountScreen}
            options={{title: 'User'}}
          />
          <Stack.Screen
            name="webview"
            component={WebviewScreen}
            options={{title: 'News'}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default Navigations;
