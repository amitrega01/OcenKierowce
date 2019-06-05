import React from 'reactn';
import { TouchableOpacity, TextInput, View, Image } from 'react-native';
import Styles from '../consts/Styles';
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
        />
        <TouchableOpacity>  
          <Image style={Styles.searchbarImage}
            source={require('../../assets/image/search.png')}
            onPress={() => {
            this.setGlobal({ toSearch: this.state.plateNumber });
              this.props.callback();
            }}
            title='Szukaj'
          />

        </TouchableOpacity>
      </View>

    );
  }
}
export default SearchBar;
