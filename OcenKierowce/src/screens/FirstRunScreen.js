import React from 'reactn';
import { Text, View, Modal } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import { AppAuth } from 'expo-app-auth';

import { GoogleSignIn } from 'expo-google-sign-in';

import { AsyncStorage, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = { loading: true };
  }

  async componentDidMount() {
    try {
      console.log('lol');
      AsyncStorage.getItem('USER').then(async value => {
        if (value == null) {
          this.setState({ loading: false });
          return;
        }
        let user = JSON.parse(value);
        if (!user.fromGoogleOrFb) {
          firebase
            .auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              alert(errorMessage);
            })
            .then(() => {
              firebase
                .database()
                .ref('users/' + firebase.auth().currentUser.uid)
                .on('value', snapshot => {
                  this.setState({ loading: false });
                  this.setGlobal({ userDetails: snapshot.val() });
                  this.props.navigation.navigate('Home');
                });
            });
        } else {
          await GoogleSignIn.askForPlayServicesAsync();
          const { type, user } = await GoogleSignIn.signInAsync();
          if (type === 'success') {
            const credential = firebase.auth.GoogleAuthProvider.credential(
              user.auth
            );
            firebase
              .auth()
              .signInWithCredential(credential)
              .then(res => {
                firebase
                  .database()
                  .ref('users/' + res.user.uid)
                  .on('value', snapshot => {
                    this.setState({ loading: false });
                    this.setGlobal({ userDetails: snapshot.val() });
                    this.props.navigation.navigate('Home');
                  });
              })
              .catch(error => {
                alert(error);
              });
          }
        }
      });
    } catch (error) {
      console.log(error);
      // Error retrieving data
    }
  }

  render() {
    return (
      <View style={Styles.wrapper}>
        <Modal
          visible={this.state.loading}
          transparent={true}
          animationType={'none'}
          onRequestClose={() => console.log('CLOSE')}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#00000040',
            }}>
            <ActivityIndicator
              size='large'
              color='#000000'
              hidesWhenStopped={true}
              animating={this.state.loading}
              style={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                padding: 4,
              }}
            />
            <Text
              style={{
                marginTop: -12,
                zIndex: -4,
                backgroundColor: '#fff',
                padding: 8,
                borderRadius: 16,
              }}>
              Logowanie...
            </Text>
          </View>
        </Modal>
        <Text style={Styles.bigText}>OcenKierowce</Text>
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => this.props.navigation.navigate('SignUp')}
          width='60%'
        />
        <BigButton
          color='#00D463'
          title='Zaloguj się'
          onPress={() => this.props.navigation.navigate('SignIn')}
          width='60%'
        />
        <BigButton
          color='#000'
          title='Anonimowo'
          width='60%'
          onPress={() => {
            console.log('LOGOWANIE ANONIMOWO');
            this.setGlobal({
              anonymous: true,
            });
            firebase
              .auth()
              .signInAnonymously()
              .then(() => {
                this.props.navigation.navigate('Home');
              });
          }}
        />
        <BigButton
          color='#000'
          title='Sign In With Google'
          width='60%'
          onPress={async () => {
            try {
              await GoogleSignIn.initAsync();
            } catch ({ message }) {
              alert('GoogleSignIn.initAsync(): ' + message);
            }

            try {
              await GoogleSignIn.askForPlayServicesAsync();
              const { type, user } = await GoogleSignIn.signInAsync();
              if (type === 'success') {
                const credential = firebase.auth.GoogleAuthProvider.credential(
                  user.auth
                );
                firebase
                  .auth()
                  .signInWithCredential(credential)
                  .then(res => {
                    this.props.navigation.navigate('CredentialSignUp', {
                      id: res.user.uid,
                      user: {
                        name: res.user.displayName,
                        email: res.user.email,
                      },
                    });
                  })
                  .catch(error => {
                    alert(error);
                  });
              }
            } catch ({ message }) {
              alert('login: Error:' + message);
            }
          }}
        />
      </View>
    );
  }
}
export default FirstRunScreen;
