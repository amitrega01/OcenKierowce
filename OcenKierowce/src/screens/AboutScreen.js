import React from 'reactn';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Styles from '../consts/Styles';
import * as firebase from 'firebase';
import moment from 'moment';

export class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
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
    let plate = this.global.toSearch;
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

    this.setState({ data: data, refreshing: false });
  }
  render() {
    return (
      <View style={Styles.wrapper}>
        <View
          style={{ paddingTop: 32, backgroundColor: '#151146', width: '100%' }}>
          <Text
            style={{
              padding: 16,
              color: '#fff',
              fontSize: 24,
              fontWeight: 'bold',
            }}>
            Opinie o {this.global.toSearch}
          </Text>
        </View>
        <FlatList
          onRefresh={() => {
            this.fetchData();
          }}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          style={{ width: ' 100%' }}
          contentContainerStyle={{
            alignItems: 'stretch',
          }}
          data={this.state.data}
          renderItem={({ item, separators }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderBottomWidth: 0.25,
                borderBottomColor: 'rgba(0,0,0,0.25)',
                padding: 16,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setGlobal({
                  detailsAlert: item,
                });
                this.props.navigation.navigate('OpinionDetails');
              }}>
              <Text
                style={{
                  padding: 8,
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.75)',
                }}>
                {item.message.lenght > 20
                  ? item.message.substring(0, 20) + '...'
                  : item.message}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Image
                  source={
                    item.type == 'UPVOTE'
                      ? require('../../assets/image/upvote.png')
                      : require('../../assets/image/downvote.png')
                  }
                  style={{
                    width: 32,
                    height: 32,
                    marginRight: 8,
                  }}
                />
                <Text>{moment(item.timeStamp).format('DD-MM-YYYY')}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
export default AboutScreen;
