import React from 'reactn';
import { Text, View } from 'react-native';
import Styles from '../consts/Styles';
import BigButton from '../components/BigButton';
import BigAlert from '../components/BigAlert';
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <BigButton
          color='#151146'
          title='Zarejestruj się'
          onPress={() => this.props.navigation.navigate('SignUp')}
          width='60%'
        />
        <BigButton
          color='#00D463'
          title='Zaloguj się'
          onPress={() => alert('Logowanie')}
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
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}
export default FirstRunScreen;
