import React from 'reactn';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';

export class SingUpScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      name: '',
      plateNumber: '',
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper} behavior='padding' enabled>
        <Text style={Styles.text}>Rejestracja</Text>
        <TextInput
          style={Styles.textInputSingUp}
          placeholder='Email'
          value={this.state.email}
          onChangeText={t => this.setState({ email: t })}
        />
        <TextInput
          style={Styles.textInputSingUp}
          textContentType='password'
          placeholder='Hasło'
          value={this.state.password}
          onChangeText={t => this.setState({ password: t })}
        />
        <TextInput
          style={Styles.textInputSingUp}
          placeholder='Imię'
          value={this.state.name}
          onChangeText={t => this.setState({ name: t })}
        />
        <TextInput
          style={Styles.textInputSingUp}
          placeholder='Numer rejestracyjny'
          value={this.state.plateNumber}
          onChangeText={t => this.setState({ plateNumber: t })}
        />
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => console.log(this.state)}
          width='80%'
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SingUpScreen;
