import React, { setGlobal } from 'reactn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
import SingUpScreen from './src/screens/SingUpScreen';
const MainNavigator = createStackNavigator({
  //TODO EKRANY
  FirstRun: { screen: FirstRunScreen },
  SignUp: { screen: SingUpScreen },
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
