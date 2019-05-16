import React from 'reactn';
import { Text, View, TextInput } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import Opinion from '../components/Opinion';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.wrapper}>
       {/*<BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => alert('Rejestracja')}
          width='80%'
        />
        
      <TextInput style={Styles.textInput} placeholder="email" ></TextInput>
      */}
      <Opinion 
       width = '50%'
       title = 'Wyprzedzal na ciaglej'
       color= '#221849'
       onPress = {() => alert('Opinia')}         
       />
      </View>
    );
  }
}
export default FirstRunScreen;
