import React from 'reactn';
import {
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import Styles from '../consts/Styles';
import RecentAlerts from '../containers/RecentAlerts';
import { Ionicons } from '@expo/vector-icons';
import { Constants, Location, Permissions } from 'expo';
import * as firebase from 'firebase';
import AboutYou from '../containers/AboutYou';
import SearchBar from '../containers/SearchBar';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      console.log(
        'Oops, this will not work on Sketch in an Android emulator. Try it on your device!'
      );
    } else {
      console.log('GETTING LOCATION');
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      console.log('NO PERMISSION');
    }
    let location = await Location.getCurrentPositionAsync({});
    console.log(location);
    let addres = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    console.log(addres);
    this.setGlobal({ region: addres[0].region });
  };

  render() {
    if (firebase.auth().currentUser.isAnonymous) {
      return (
        <KeyboardAvoidingView behavior='padding' style={Styles.wrapper}>
          {/* wariant dla anonimowych */}

          <SearchBar callback={() => this.props.navigation.navigate('About')} />
          <RecentAlerts
            callback={() => this.props.navigation.navigate('OpinionDetails')}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={Styles.addButton}
            onPress={() => this.props.navigation.navigate('NewMessage')}>
            <Ionicons name='md-add' size={32} color='black' />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    } else {
      return (
        <KeyboardAvoidingView behavior='padding' style={Styles.wrapper}>
          <SearchBar callback={() => this.props.navigation.navigate('About')} />
          <AboutYou
            callback={() => this.props.navigation.navigate('OpinionDetails')}
          />
          <RecentAlerts
            callback={() => this.props.navigation.navigate('OpinionDetails')}
          />

          <TouchableOpacity
            activeOpacity={0.9}
            style={Styles.addButton}
            onPress={() => this.props.navigation.navigate('NewMessage')}>
            <Ionicons name='md-add' size={32} color='black' />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      );
    }
  }
}
export default HomeScreen;
