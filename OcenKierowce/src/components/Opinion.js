import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Opinion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var color;
    switch (this.props.opinion.type) {
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
        activeOpacity={0.8}
        style={[styles.wrapper, { backgroundColor: color }]}
        onPress={() => this.props.callback(this.props.opinion._id)}>
        <Text style={styles.text}>{this.props.opinion.message}</Text>
      </TouchableOpacity>
    );
  }
}

export default Opinion;
const styles = StyleSheet.create({
  wrapper: {
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    elevation: 4,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 15,
  },
});
