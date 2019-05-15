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
        <TextInput style={Styles.textInputSingUp} placeholder="Email"></TextInput>
        <TextInput style={Styles.textInputSingUp} placeholder="Hasło"></TextInput> 
        <TextInput style={Styles.textInputSingUp} placeholder="Imię"></TextInput> 
        <TextInput style={Styles.textInputSingUp} placeholder="Numer rejestracyjny"></TextInput>    
        
      </View>
    );
  }
}
export default SingUpScreen;