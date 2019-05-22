import React from 'reactn';
import { Text, View, Modal, Image, TouchableOpacity } from 'react-native';
import Styles from '../consts/Styles';

const types = ['UPVOTE', 'DOWNVOTE', 'ALERT'];
export class MessageTypeSelector extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.global.currentType);
  }
  switchType() {
    this.setGlobal({
      currentType:
        this.global.currentType == types[2]
          ? types[0]
          : types[types.indexOf(this.global.currentType) + 1],
    });
    console.log(this.global.currentType);
  }
  render() {
    switch (this.global.currentType) {
      case types[0]: {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ elevation: 4 }}
            onPress={() => this.switchType()}>
            <Image
              style={Styles.footerImages}
              source={require('../../assets/image/upvote.png')}
            />
          </TouchableOpacity>
        );
      }
      case types[1]: {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ elevation: 4 }}
            onPress={() => this.switchType()}>
            <Image
              style={Styles.footerImages}
              source={require('../../assets/image/downvote.png')}
            />
          </TouchableOpacity>
        );
      }
      case types[2]: {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ elevation: 4 }}
            onPress={() => this.switchType()}>
            <Image
              style={Styles.footerImages}
              source={require('../../assets/image/redbutton.png')}
            />
          </TouchableOpacity>
        );
      }
    }
  }
}
export default MessageTypeSelector;
