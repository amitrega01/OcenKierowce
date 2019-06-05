import React from 'reactn';
import {
  TouchableOpacity,
  TextInput,
  Modal,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import Styles from '../consts/Styles';
import MessageTypeSelector from '../components/MessageTypeSelector';
import BigButton from '../components/BigButton';
export class SerachBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      TextInputValue: ''
    }
}

buttonClickListener = () =>{
    const { TextInputValue }  = this.state ;
    Alert.alert(TextInputValue);
}

  //<Text style={Styles.mediumText}>Opinie o {this.global.plateNo}</Text> ->
  //onChangeText={(text) => this.setState({text})}
  //text = plateNo
  
  render() {
    return (
      <View>
      <TextInput
        style={{height: 40}}
        placeholder="Napisz że co!"
        onChangeText={TextInputValue => this.setState({TextInputValue})}
      /> 
      <Button onPress={this.buttonClickListener} title='OKEJ'/>
      </View>
    );
  }
}
export default SerachBar;
