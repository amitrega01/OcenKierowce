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
        <Text style={Styles.bigText}>OcenKierowce</Text>
        <BigAlert
          alert={{
            title: 'Wypadek',
            alertType: 'alert',
            date: Date.now(),
            description: 'Wypadek bla bla bla',
            image:
              'https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/60829850_1273937492780691_3797987554913943552_o.jpg?_nc_cat=108&_nc_ht=scontent.fktw1-1.fna&oh=51bce54e016d8bed63e7e421fa0df7a3&oe=5D5D7AD4',
          }}
        />
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
