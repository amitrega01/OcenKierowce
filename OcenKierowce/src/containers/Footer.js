import React from 'reactn';
import {
  TouchableOpacity,
  TextInput,
  Modal,
  Text,
  View,
  Image,
} from 'react-native';
import Styles from '../consts/Styles';
import MessageTypeSelector from '../components/MessageTypeSelector';
import BigButton from '../components/BigButton';
export class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plateNumber: '',
    };
  }

  showModal() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <View style={Styles.footer}>
        <MessageTypeSelector />

        <BigButton
          color='#FFF'
          title='Dodaj nową wiadomość'
          onPress={this.props.bigButtonPress}
          width='60%'
        />
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            style={Styles.footerImages}
            source={require('../../assets/image/image.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Footer;
