import React from 'reactn';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export class BigAlert extends React.Component {
  constructor(props) {
    super(props);
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
        onPress={() => {
          alert(JSON.stringify(this.props.alert));
        }}>
        <View style={styles.content}>
          <Text style={[styles.header, { backgroundColor: color }]}>
            {this.props.alert.plateNumber}{' '}
          </Text>
          <Text style={styles.date}>{this.props.alert.timeStamp}</Text>
          <Text style={styles.date}>{this.props.alert.region}</Text>
          <Text style={styles.description}>{this.props.alert.message}</Text>
        </View>
        <View style={styles.imagePart}>
          {/* <Image
            style={styles.image}
            source={{
              uri: this.props.alert.image,
            }}
          /> */}
        </View>
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
