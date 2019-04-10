import React, { setGlobal } from 'reactn';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstRunScreen from './src/screens/FirstRunScreen';
const MainNavigator = createStackNavigator({
  //TODO EKRANY
  FirstRun: { screen: FirstRunScreen },
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
