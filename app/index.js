import React,{Component} from  'react';
import EStyleSheet from "react-native-extended-stylesheet";
import Navigator from "./config/routes";
import { AlertProvider } from "./components/Alert";
import { Provider } from "react-redux";
import { YellowBox } from 'react-native';
import store from "./config/store";

EStyleSheet.build({
  $primaryBlue : '#4f6d7a',
    $primaryOrange:'#F2A049',  //"#4f6d7a",
    $SecondaryOrange:'#EE5155', //"#d57a66",
    $primaryGreen: '#00bd9d',
    $primaryPurple: '#9e768f',
  
    $white: '#fff',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',
    $border: '#e2e2e2'
  });
  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']); // to remove warnings
  YellowBox.ignoreWarnings(['Warning: Remote debugger is in a background(...) (or opening it in a separate window)', 'Module RCTImageLoader']);
  export default () => (
    <Provider store={store}>
    <AlertProvider>
      <Navigator onNavigationStateChange={null} />
    </AlertProvider>
    </Provider>
  );