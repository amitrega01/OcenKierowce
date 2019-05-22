import React from 'reactn';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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
      
        <View style={ { 
          flexDirection: 'row',  
          width: '100%', 
          height: 80, 
          backgroundColor: '#F9FAFE', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        }} >
          <TextInput
                  style={{width:200  ,
                  height:40,
                  borderRadius: 16,
                  elevation: 4,
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  //alignItems: 'center',
                  //justifyContent: 'center',
                  backgroundColor: '#FFF',
                  //margin: 25,
                }}
          />
          <TouchableOpacity>
            <Image style={ { width: 80, height: 80}} source={require('./image/redbutton.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={ { width: 80, height: 80}} source={require('./image/image.png')} />
          </TouchableOpacity>
        </View>
      </View>
      
      
      
    );
  }0
}
export default FirstRunScreen;
