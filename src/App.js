import React, { Component } from 'react';
import { StatusBar, Platform, Image, Text, View, Dimensions } from 'react-native';
import { Asset, AppLoading, SplashScreen } from 'expo';

import { observable, action, computed, extendObservable } from 'mobx';
import { Provider, inject, observer } from 'mobx-react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import { FormattedWrapper } from 'react-native-globalize';
import messages from './Messages';
import ApplicationState from './store/Application.State.Mobx';

import Navigator from './Navigator';
import { colors } from './utils/constants';

const Root = styled.View`
flex: 1;
background-color: ${props => props.theme.BLACK};
`;

const StatusBarAndroid = styled.View`
height: 24;
background-color: ${props => props.theme.BLACK};
`;


class RootContainer extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
          <Root>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent />
            { Platform.OS === 'android' && Platform.Version >= 20 ? <StatusBarAndroid /> : null }
            <Navigator />
          </Root>
      </ThemeProvider>
    );
  }
}

@observer
class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){}
  componentWillMount(){}
  componentWillUnmount(){}
  componentWillReceiveProps(){}
  componentWillUpdate(){}

  render() {
    if (ApplicationState.AppGlobalState.SplashShowing === false){
      return (
        <Provider ApplicationState={ApplicationState}>
          <RootContainer />
        </Provider>
      );
    } else {
      return (
          <View style={{flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
            <AppLoading
              style={{ backgroundColor: ()=>{props => props.theme.BLACK}}}
              startAsync={()=>{ // Call to load data

                /*
                  This is designed to emulate loading data
                */
                setTimeout(()=>{
                  ApplicationState.AppGlobalState.SplashShowing =  false;
                }, 5000);


              }} 
              onError={()=>{}}  // Called on load error
              onFinish={()=>{  // Called on loading finish
                SplashScreen.hide();
              }}
            />
            <Image
              style={{flex: 1, width: Dimensions.get('window').width, height: Dimensions.get('window').height }}
              resizeMode="cover"
              source={require('../assets/images/splash.png')}
              //onLoad={this._cacheResourcesAsync}
            />
          </View>
      )
    }
  }
}

export default App;
