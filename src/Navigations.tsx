import React, {useEffect, useState} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
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
import Header from './components/Header';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();
const Navigations = () => {
  const {
    Actions: {setFeedsData, setWelcomeScreenFlag, setScreenLoader, setIsHindi},
    state,
  } = useAppContext();
  const [activeScreen, setActiveScreen] = useState<string>('home');
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
    <View style={Styles.ScreenViewArea}>
      <Header activeScreen={activeScreen} />
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
      <Footer activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </View>
  );
};

export default Navigations;
