import React from 'reactn';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton';
import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export class SingInScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      email: 'amitrega01@gmail.com',
      password: 'insu1insu',
    };
  }

  signIn = () => {
    var state = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        return;
      })
      .then(() => {
        firebase
          .database()
          .ref('users/' + firebase.auth().currentUser.uid)
          .on('value', snapshot => {
            this.setGlobal({ userDetails: snapshot.val() });
            this.props.navigation.navigate('Home');
            this._storeData(
              JSON.stringify({ email: state.email, password: state.password })
            );
          });
      });
  };

  _storeData = async userDetails => {
    try {
      await AsyncStorage.setItem('USER', userDetails);
    } catch (error) {
      // Error saving data
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={Styles.wrapper} behavior='padding' enabled>
        <Text style={Styles.text}>Logowanie</Text>
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
        <BigButton
          color='#151146'
          title='Zaloguj się'
          onPress={this.signIn}
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
export default SingInScreen;
