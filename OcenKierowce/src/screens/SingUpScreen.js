import React from 'reactn';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Styles from '../consts/Styles';

export class SingUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  

  render() {
    return (
      <View style={Styles.wrapper}>
         <Text style = {Styles.text}>Rejestracja</Text>
        
      </View>
    );
  }
}
export default SingUpScreen;