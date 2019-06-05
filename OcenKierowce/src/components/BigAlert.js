import React from 'reactn';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import moment from 'moment';
import * as firebase from 'firebase';
export class BigAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUri: null,
    };
    console.log(this.props.alert);
  }

  async componentDidMount() {
    if (this.props.alert.photo) {
      let url = await firebase
        .storage()
        .refFromURL(
          `gs://ocenkierowce-553e9.appspot.com/thumb_${
            this.props.alert._id
          }.jpg`
        )
        .getDownloadURL()
        .then(function(url) {
          // `url` is the download URL for 'images/stars.jpg'

          // This can be downloaded directly:
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
      this.setState({ photoUri: url });
    }
  }
  //TODO: dodac propsy i przetestowac na jakisch zmockowanych danych json
  render() {
    var color;
    switch (this.props.alert.type) {
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
      <TouchableOpacity
        style={styles.wrapper}
        activeOpacity={0.9}
        onPress={() => this.props.callback(this.props.alert._id)}>
        <View style={styles.content}>
          <Text style={[styles.header, { backgroundColor: color }]}>
            {this.props.alert.plateNumber}{' '}
          </Text>
          <Text style={styles.date}>
            {moment(this.props.alert.timeStamp).format('DD-MM-YYYY hh:mm A')}
          </Text>
          <Text style={styles.date}>{this.props.alert.region}</Text>
          <Text style={styles.description}>{this.props.alert.message}</Text>
        </View>
        {this.props.alert.photo ? (
          <View style={styles.imagePart}>
            <Image
              style={styles.image}
              source={{
                uri: this.state.photoUri,
              }}
            />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  }
}
export default BigAlert;

const styles = StyleSheet.create({
  wrapper: {
    height: 140,
    elevation: 2,
    borderRadius: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 8,
  },
  content: {
    flex: 4,
    flexDirection: 'column',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: 'rgba(0,0,0,0.5)',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 16,
  },
  description: {
    color: 'rgba(0,0,0,0.75)',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  imagePart: {
    flex: 3,
  },
  image: {
    flex: 1,
  },
});
