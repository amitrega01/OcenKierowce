import React, { setGlobal } from 'reactn';

const MainNavigator = createStackNavigator({
  //TODO EKRANY
});

const AppContainer = createAppContainer(MainNavigator);
setGlobal({});

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
