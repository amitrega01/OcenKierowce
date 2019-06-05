import React from 'reactn';
import { TouchableOpacity, TextInput, View, Button } from 'react-native';
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plateNumber: '',
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder='Numer tablic'
          onChangeText={plateNumber => this.setState({ plateNumber })}
        />
        <Button
          onPress={() => {
            this.setGlobal({ toSearch: this.state.plateNumber });
            this.props.callback();
          }}
          title='Szukaj'
        />
      </View>
    );
  }
}
export default SearchBar;
