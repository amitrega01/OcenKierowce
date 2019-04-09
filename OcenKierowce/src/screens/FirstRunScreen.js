import React from 'reactn';
import { Text, View } from 'react-native';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text>ReactN component</Text>
      </View>
    );
  }
}
export default FirstRunScreen;
