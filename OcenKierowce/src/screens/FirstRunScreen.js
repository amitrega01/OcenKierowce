import React from 'reactn';
import { Text, View, TextInput } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => alert('Rejestracja')}
          width='80%'
        />
        <TextInput style={Styles.textInput} placeholder="email" ></TextInput>
      </View>
    );
  }
}
export default FirstRunScreen;
