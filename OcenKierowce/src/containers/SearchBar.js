import React from "reactn";
import {
  TouchableOpacity,
  TextInput,
  Modal,
  Text,
  View,
  Image,
  Button,
  Alert
} from "react-native";
import Styles from "../consts/Styles";
import MessageTypeSelector from "../components/MessageTypeSelector";
import BigButton from "../components/BigButton";
export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plateNumber: ""
    };
  }

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40 }}
          placeholder="Numer tablic"
          onChangeText={plateNumber => this.setState({ plateNumber })}
        />
        <Button
          onPress={() => {
            this.setGlobal({ toSearch: this.state.plateNumber });
            this.props.callback();
          }}
          title="Szukaj"
        />
      </View>
    );
  }
}
export default SearchBar;
