import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class Opinion extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.wrapper,
          { backgroundColor: this.props.color, width: this.props.width },
        ]}
        onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.title}</Text>
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
    padding: 20
  },
  text: {
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 12,
  },
});
