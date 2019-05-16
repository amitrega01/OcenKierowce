import React from 'reactn';
import { Text, View } from 'react-native';
import Styles from '../consts/Styles';
import RecentAlerts from '../containers/RecentAlerts';

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
          <RecentAlerts />
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
