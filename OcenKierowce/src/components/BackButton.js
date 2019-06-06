import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default class BackButton extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={this.props.onPress}
        style={{
          position: 'absolute',
          top: 32,
          left: 16,
        }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='ios-arrow-back' size={32} color='rgba(0,0,0,0.75)' />
          <Text style={{ color: 'rgba(0,0,0,0.75)', marginLeft: 8 }}>Wróc</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
