import React, { setGlobal } from 'reactn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
import SingUpScreen from './src/screens/SingUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import SingInScreen from './src/screens/SingInScreen';
const MainNavigator = createStackNavigator({
  //TODO EKRANY
  FirstRun: { screen: FirstRunScreen },
  Home: { screen: HomeScreen },
  SignUp: { screen: SingUpScreen },
  SingIn: {screen: SingInScreen }
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
