import React from 'reactn';
import {
  TouchableOpacity,
  TextInput,
  Modal,
  Text,
  View,
  Image,
  Button,
  Alert,
} from 'react-native';
import Styles from '../consts/Styles';
import MessageTypeSelector from '../components/MessageTypeSelector';
import BigButton from '../components/BigButton';
export class SerachBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder='Numer tablic'
          onChangeText={text => this.setState({ text })}
        />
        <Button
          onPress={() => {
            this.setGlobal({ toSearch: this.state.text });
            this.props.callback();
          }}
          title='Szukaj'
        />
      </View>
    );
  }
}
export default SerachBar;
