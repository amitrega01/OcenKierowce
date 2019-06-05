import React from 'reactn';
import { Text, View, FlatList } from 'react-native';
import Styles from '../consts/Styles';
import BigAlert from '../components/BigAlert';

import * as firebase from 'firebase';
import OpinionDetailsModal from '../screens/OpinionDetailsScreen';

export class RecentAlerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibleModal: false,
      alert: null,
    };
  }
  async componentWillMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ refreshing: true });
    let data = await firebase
      .database()
      .ref('/messages/')
      .once('value')
      .then(function(snapshot) {
        let temp = [];
        snapshot.forEach(child => {
          temp.push({
            ...child.val(),
            _id: child.key,
          });
        });

        return temp.reverse();
      });
    console.table(data);
    this.setGlobal({ recentAlerts: data });

    this.setState({ refreshing: false, alert: data[0] });
  }
  showModal = id => {
    this.setGlobal({
      detailsAlert: this.global.recentAlerts.find(item => item._id == id),
    });
    this.props.callback();
  };
  render() {
    return (
      <View style={Styles.wrapper}>
        <Text style={Styles.mediumText}>Ostatnie w twojej okolicy</Text>
        <FlatList
          onRefresh={() => {
            this.fetchData();
          }}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          style={{ width: ' 100%' }}
          contentContainerStyle={{
            alignItems: 'stretch',
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}
          data={this.global.recentAlerts}
          renderItem={({ item, separators }) => (
            <BigAlert alert={item} callback={this.showModal} />
          )}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
export default RecentAlerts;
