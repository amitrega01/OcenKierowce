import React from 'reactn';
import { TouchableOpacity, TextInput, View, Image } from 'react-native';
import Styles from '../consts/Styles';

import { Ionicons } from '@expo/vector-icons';
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plateNumber: '',
    };
  }

  render() {
    return (
      <View style={Styles.searchbar}>
        <TextInput
          style={Styles.searchbarTextInput}
          placeholder='Numer tablic'
          onChangeText={plateNumber => this.setState({ plateNumber })}
          autoCapitalize='characters'
          onSubmitEditing={() => {
            this.setGlobal({
              toSearch: this.state.plateNumber.replace(/\s+/g, ''),
            });
            this.props.callback();
          }}
        />
        <TouchableOpacity
          onPress={() => {
            this.setGlobal({
              toSearch: this.state.plateNumber.replace(/\s+/g, ''),
            });
            this.props.callback();
          }}>
          <Ionicons name='md-search' size={32} color='white' />
        </TouchableOpacity>
      </View>
    );
  }
}
export default SearchBar;
