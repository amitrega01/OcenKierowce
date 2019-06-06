import React from 'reactn';
import { Text, Image, ScrollView, View } from 'react-native';
import BackButton from '../components/BackButton';
import Styles from '../consts/Styles';
import moment from 'moment';
import * as firebase from 'firebase';
export class OpinionDetailsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    console.log(this.global.detailsAlert);
    this.state = {
      photoUri: null,
    };
  }

  async componentDidMount() {
    if (this.global.detailsAlert.photo) {
      let url = await firebase
        .storage()
        .refFromURL(
          `gs://ocenkierowce-553e9.appspot.com/${
            this.global.detailsAlert._id
          }.jpg`
        )
        .getDownloadURL()
        .then(function(url) {
          var xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onload = function(event) {
            var blob = xhr.response;
          };
          xhr.open('GET', url);
          xhr.send();
          return url;
        })
        .catch(() => {
          return null;
        });
      console.log(url);
      this.setState({ photoUri: url });
    }
  }

  render() {
    var image = this.global.detailsAlert.photo ? (
      <Image
        style={{ flex: 1, elevation: 4 }}
        source={{
          uri: this.state.photoUri,
        }}
      />
    ) : null;
    var color;
    switch (this.global.detailsAlert.type) {
      case 'ALERT': {
        color = '#151146';
        break;
      }
      case 'UPVOTE': {
        color = '#00D463';
        break;
      }
      case 'DOWNVOTE': {
        color = '#FE4F37';
        break;
      }
    }
    return (
      <View style={{ flex: 1, justifyContent: 'flex-start' }}>
        <BackButton onPress={() => this.props.navigation.goBack()} />
        <View style={{ paddingTop: 24, backgroundColor: color }}>
          <Text
            style={{
              padding: 16,
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {this.global.detailsAlert.plateNumber}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}>
          {image}
          <View style={{ flex: 1 }}>
            <Text
              style={{
                margin: 16,
                backgroundColor: '#fff',
                borderRadius: 8,
                elevation: 4,
                borderWidth: 0.25,
                borderColor: 'rgba(0,0,0,0.5)',
                padding: 16,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              {this.global.detailsAlert.message}
            </Text>

            <Text style={{ paddingHorizontal: 16 }}>
              Data dodania:{' '}
              {moment(this.global.detailsAlert.timeStamp).format(
                'DD-MM-YYYY hh:mm A'
              )}
            </Text>
            <Text style={{ paddingHorizontal: 16 }}>
              Autor: {this.global.detailsAlert.author.uid}
            </Text>
            <Text style={{ paddingHorizontal: 16 }}>
              Region: {this.global.detailsAlert.region}
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default OpinionDetailsScreen;
