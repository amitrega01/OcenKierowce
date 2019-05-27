import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class BackButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.wrapper,
          { backgroundColor: this.props.color, width: this.props.width }
        ]}
        onPress={this.props.onPress}
      >
        <Text
          style={this.props.color == "#FFF" ? styles.textDark : styles.text}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default BackButton;
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 16,
    left: 16,
    paddingTop: 24
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold"
  }
});
