import React from 'reactn';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Styles from '../consts/Styles';
import BigAlert from '../components/BigAlert';
export class RecentAlerts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 1,
          title: 'Wypadek',
          alertType: 'alert',
          date: Date.now(),
          description: 'BLA BLA',
          image: 'https://i.imgur.com/4H5lAsq.jpg',
        } /* 
        {
          id: 2,
          title: 'Wypadek',
          alertType: 'negative',
          date: Date.now(),
          description: 'BLA BLA',
          image: 'https://i.imgur.com/4H5lAsq.jpg',
        },
        {
          id: 3,
          title: 'Wypadek',
          alertType: 'positive',
          date: Date.now(),
          description: 'BLA BLA',
          image: 'https://i.imgur.com/4H5lAsq.jpg',
        }, */,
      ],
    };
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <Text style={Styles.mediumText}>Ostatnie w twojej okolicy</Text>
        <FlatList
          style={{ width: ' 100%' }}
          contentContainerStyle={{
            alignItems: 'stretch',
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}
          data={this.state.items}
          renderItem={({ item, separators }) => <BigAlert alert={item} />}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    );
  }
}
export default RecentAlerts;
