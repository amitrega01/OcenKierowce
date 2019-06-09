import React from 'reactn';
import {
  Text,
  KeyboardAvoidingView,
  TextInput,
  AsyncStorage,
} from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton';

import * as firebase from 'firebase';

export class CredentialSignUp extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      plateNumber: '',
    };
  }

  render() {
    const { navigation } = this.props;
    const id = navigation.getParam('id', null);
    const user = navigation.getParam('user', null);

    return (
      <KeyboardAvoidingView style={Styles.wrapper} behavior='padding' enabled>
        <Text style={Styles.text}>Dodaj swój numer rejestracyjny</Text>

        <TextInput
          style={Styles.textInputSingUp}
          placeholder='Numer rejestracyjny'
          value={this.state.plateNumber}
          autoCapitalize='characters'
          onChangeText={t => this.setState({ plateNumber: t })}
        />
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={async () => {
            let toDb = {
              ...user,
              plateNumber: this.state.plateNumber,
            };

            firebase
              .database()
              .ref('users/' + id)
              .set(toDb);
            this.setGlobal({ userDetails: toDb });
            AsyncStorage.setItem(
              'USER',
              JSON.stringify({
                email: toDb.email,
                password: '',
                fromGoogleOrFb: true,
              })
            ).then(() => {
              this.props.navigation.navigate('Home');
            });
          }}
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
export default CredentialSignUp;
