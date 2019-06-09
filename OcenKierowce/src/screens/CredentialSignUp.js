import React from 'reactn';
import { Text, KeyboardAvoidingView, TextInput } from 'react-native';
export class CredentialSignUp extends React.Component {
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
          onChangeText={t => this.setState({ plateNumber: t })}
        />
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => {
            let toDb = {
              ...user,
              plateNumber: this.state.plateNumber,
            };
            firebase
              .database()
              .ref('users/' + id)
              .set(toDb);
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
