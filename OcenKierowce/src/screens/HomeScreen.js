import React from 'reactn';
import { Text, View } from 'react-native';
import Styles from '../consts/Styles';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }

  render() {
    if (this.global.anonymous) {
      return (
        <View style={Styles.wrapper}>
          {/* wariant dla anonimowych */}
          <Text>Anonimowo</Text>
        </View>
      );
    } else {
      return (
        <View style={Styles.wrapper}>
          {/* wariant dla zalogowanych */}
          <Text>{this.global.user.name}</Text>
        </View>
      );
    }
  }
}
export default HomeScreen;
