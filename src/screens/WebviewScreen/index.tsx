import React from 'react';
import {WebView} from 'react-native-webview';
import Header from '../../components/Header';
import {common} from '../commonInterfaces';
interface webviewScreenProps extends common {}

const WebviewScreen: React.FC<webviewScreenProps> = props => {
  if (!props.route?.params?.link) return null;
  return (
    <>
      <Header showBackBtn title="NEWS" />
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
