import React from 'reactn';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton';

import * as firebase from 'firebase';

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

  registerUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
    var state = this.state;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        var email = user.email;
        var uid = user.uid;
        console.log('Zalogowano:');

        let user = {
          email: email,
          plateNumber: state.plateNumber,
          name: state.name,
        };
        firebase
          .database()
          .ref('users/' + uid)
          .set(user)
          .then(() => {
            this.setGlobal({
              userDetails: user,
            });
            this.props.navigation.navigate('Home');
            this._storeData(
              JSON.stringify({ email: state.email, password: state.password })
            );
          });
      } else {
      }
    });
  };

  _storeData = async userDetails => {
    try {
      await AsyncStorage.setItem('USER', userDetails);
    } catch (error) {}
  };
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
          onPress={this.registerUser}
          width='80%'
        />
        <BackButton
          title='Wróć'
          onPress={() => this.props.navigation.goBack()}
          width='20%'
        />
      </KeyboardAvoidingView>
    );
  }
}
export default SingUpScreen;
