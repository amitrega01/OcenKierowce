import React, { setGlobal } from 'reactn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import NewMessageScreen from './src/screens/NewMessageScreen';
import OpinionDetailsScreen from './src/screens/OpinionDetailsScreen';
import CameraScreen from './src/screens/CameraScreen';
import SingInScreen from './src/screens/SingInScreen';

const MainNavigator = createStackNavigator({
  //TODO EKRANY
  FirstRun: { screen: FirstRunScreen },
  Home: { screen: HomeScreen },
  SignUp: { screen: SingUpScreen },
  SignIn: { screen: SingInScreen },
  NewMessage: { screen: NewMessageScreen },
  Camera: { screen: CameraScreen },
  OpinionDetails: { screen: OpinionDetailsScreen },
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({
  region: 'Oczekiwanie na GPS',
  currentType: 'UPVOTE',
  recentAlerts: [],
  userDetails: null,
  aboutYou: [],
  lastPhoto: null,
});

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAoSy-wVIwP4TBal-2KH8MyQdj3dvJVNDM',
  authDomain: 'ocenkierowce-553e9.firebaseapp.com',
  databaseURL: 'https://ocenkierowce-553e9.firebaseio.com',
  projectId: 'ocenkierowce-553e9',
  storageBucket: 'ocenkierowce-553e9.appspot.com',
  messagingSenderId: '168007944726',
  appId: '1:168007944726:web:c3d0a465fd039233',
};
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
