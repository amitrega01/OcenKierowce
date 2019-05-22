import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class BigButton extends Component {
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
        <Text
          style={this.props.color == '#FFF' ? styles.textDark : styles.text}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default BigButton;
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
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  textDark: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.75)',
    fontSize: 18,
  },
});
