import React from 'reactn';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
} from 'react-native';
import Styles from '../consts/Styles';
import MessageTypeSelector from '../components/MessageTypeSelector';
import BigButton from '../components/BigButton';
import BackButton from '../components/BackButton';
import * as firebase from 'firebase';

export class NewMessageScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      plateNumber: '',
      message: '',
      location: null,
      errorMessage: null,
      region: 'Oczekiwanie na GPS',
    };
  }

  async uploadImage(key) {
    var ref = firebase
      .storage()
      .ref()
      .child(key + '.jpg');

    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(xhr.response);
      };
      xhr.onerror = function(e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', this.global.lastPhoto, true);
      xhr.send(null);
    });
    ref.put(blob);
  }

  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={Styles.wrapper}>
        <Text style={[Styles.bigText, { textAlign: 'center' }]}>
          Dodaj opinie lub ostrzeżenie
        </Text>
        <View style={styles.row}>
          <Text style={styles.text}>Typ wiadomości</Text>
          <MessageTypeSelector />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Numer tablicy</Text>
          <TextInput
            placeholder='Numer rejestracyjny'
            style={styles.input}
            value={this.state.plateNumber}
            autoCapitalize='characters'
            onChangeText={txt => this.setState({ plateNumber: txt })}
          />
        </View>
        <TouchableOpacity
          style={styles.row}
          onPress={() => {
            this.props.navigation.navigate('Camera');
          }}>
          <Text style={styles.text}>
            {this.global.lastPhoto ? 'Zdjęcie załączone' : 'Załącz zdjęcie'}
          </Text>
        </TouchableOpacity>
        <View style={styles.row}>
          <TextInput
            multiline={true}
            placeholder='Wpisz treść wiadomości'
            style={styles.input}
            value={this.state.message}
            onChangeText={txt => this.setState({ message: txt })}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Region</Text>
          <Text style={styles.text}>{this.global.region}</Text>
        </View>
        <BigButton
          color='#00D463'
          title='Dodaj wiadomość'
          onPress={() => {
            let user = firebase.auth().currentUser;
            let message = {
              message: this.state.message,
              type: this.global.currentType,
              plateNumber: this.state.plateNumber.replace(/\s+/g, ''),
              region: this.global.region,
              photo: this.global.lastPhoto ? true : false,
              author: { uid: user.uid, anonymouns: user.isAnonymous },
              timeStamp: Date.now(),
            };
            var res = firebase
              .database()
              .ref('messages/')
              .push(message)
              .then(res => {
                this.uploadImage(res.key).then(() => {
                  this.setGlobal({ lastPhoto: null });
                });
              });

            this.props.navigation.pop();
          }}
          width='60%'
        />
        <BackButton
          title='Wróć'
          onPress={() => {
            this.setGlobal({ lastPhoto: null });
            this.props.navigation.goBack();
          }}
          width='20%'
        />
      </KeyboardAvoidingView>
    );
  }
}

export default NewMessageScreen;
const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    width: '90%',
    flexDirection: 'row',
    height: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 4,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(0,0,0,0.75)',
  },
  input: {
    flex: 8,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
