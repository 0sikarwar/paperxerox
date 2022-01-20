import React, {useEffect} from 'react';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {useAppContext} from '../../context/AppContext';
import {common} from '../commonInterfaces';
interface webviewScreenProps extends common {}

const WebviewScreen: React.FC<webviewScreenProps> = props => {
  const {
    state,
    Actions: {setActiveScreen},
  } = useAppContext();
  useEffect(() => {
    const activeScr = state.activeScreen;
    setActiveScreen('webview');
    return () => {
      setActiveScreen(activeScr);
    };
  }, []);
  if (!props.route?.params?.link) return null;
  return (
    <>
      <WebView
        javaScriptEnabled={true}
        scalesPageToFit
        originWhitelist={['*']}
        useWebKit
        source={{
          uri: props.route.params.link,
        }}
        onLoadStart={() => {
          console.log('loading start...');
        }}
        onLoadProgress={() => {
          console.log('loading...');
        }}
        onLoad={() => {
          console.log('load');
        }}
        onLoadEnd={() => {
          console.log('loading End...');
        }}
        onError={() => {
          console.log('ERRORR');
        }}
      />
    </>
  );
};

export default WebviewScreen;
