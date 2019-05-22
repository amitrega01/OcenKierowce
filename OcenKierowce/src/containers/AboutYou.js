import React from 'reactn';
import { Text, View, FlatList } from 'react-native';
import Opinion from '../components/Opinion';
import * as firebase from 'firebase';
import Styles from '../consts/Styles';
export class AboutYou extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  async componentDidMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ refreshing: true });
    console.log('USER DETAILS');
    console.log(this.global.userDetails);
    let plate = this.global.userDetails.plateNumber;
    let data = await firebase
      .database()
      .ref('/messages/')
      .once('value')
      .then(function(snapshot) {
        let temp = [];
        snapshot.forEach(child => {
          if (child.val().plateNumber == plate)
            temp.push({
              ...child.val(),
              _id: child.key,
            });
        });
        return temp.reverse();
      });
    console.log(data);
    this.setGlobal({ aboutYou: data });

    this.setState({ refreshing: false });
  }
  render() {
    return (
      <View style={[Styles.wrapper, { flex: 0.2 }]}>
        <Text style={Styles.mediumText}>Opinie o Tobie</Text>
        <FlatList
          onRefresh={() => {
            this.fetchData();
          }}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          style={{ width: ' 100%' }}
          contentContainerStyle={{
            alignItems: 'stretch',
            paddingHorizontal: 16,
          }}
          horizontal={true}
          data={this.global.aboutYou}
          renderItem={({ item, separators }) => (
            <Opinion
              opinion={item}
              onPress={() => alert(JSON.stringify(item))}
            />
          )}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
export default AboutYou;
