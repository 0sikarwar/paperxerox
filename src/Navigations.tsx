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
import {Text} from './components/NativeComponents/Text';
import SideMenu from './components/SideMenu';
import SignIn from './components/SignIn';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Navigations = () => {
  const {
    Actions: {
      setFeedsData,
      setWelcomeScreenFlag,
      setScreenLoader,
      setActiveScreen,
    },
    state,
  } = useAppContext();
  useEffect(() => {
    appInit(setFeedsData, setWelcomeScreenFlag, setScreenLoader);
  }, []);
  const navigation = useNavigation();
  // @ts-ignore
  const currentScreen = navigation.getCurrentRoute()?.name;
  useEffect(() => {
    currentScreen && setActiveScreen(currentScreen);
  }, [currentScreen]);

  // const hideFooter =

  return (
    <>
      {state.showScreenLoader && (
        <View style={Styles.overlay}>
          <ActivityIndicator size="large" color={primaryColor} />
          <Text color="#000">Loading...</Text>
        </View>
      )}
      <SafeAreaView style={Styles.AndroidSafeArea}>
        <View style={Styles.ScreenViewArea}>
          {
            <Header
              activeScreen={state.activeScreen}
              setActiveScreen={setActiveScreen}
              showBackBtn={currentScreen === 'webview'}
              title={currentScreen === 'webview' ? 'NEWS' : ''}
            />
          }
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
          <SignIn />
          <SideMenu />
          {currentScreen !== 'webview' && (
            <Footer
              activeScreen={state.activeScreen}
              setActiveScreen={setActiveScreen}
            />
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Navigations;
