import React from 'reactn';
import { Text, View } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import SerachBar from '../containers/SearchBar';


import * as firebase from 'firebase';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.wrapper}>
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
      </View>
    );
  }
}
export default FirstRunScreen;
