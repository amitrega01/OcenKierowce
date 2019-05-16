import React from 'reactn';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAoSy-wVIwP4TBal-2KH8MyQdj3dvJVNDM',
  authDomain: 'ocenkierowce-553e9.firebaseapp.com',
  databaseURL: 'https://ocenkierowce-553e9.firebaseio.com',
  projectId: 'ocenkierowce-553e9',
  storageBucket: 'ocenkierowce-553e9.appspot.com',
  messagingSenderId: '168007944726',
  appId: '1:168007944726:web:c3d0a465fd039233',
};
firebase.initializeApp(firebaseConfig);

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
        console.log(email);
        firebase
          .database()
          .ref('users/' + uid)
          .set({
            email: email,
            plateNumber: state.plateNumber,
            name: state.name,
          });
        // ...
      } else {
        // User is signed out.
        // ...
      }
    });
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
      </KeyboardAvoidingView>
    );
  }
}
export default SingUpScreen;
