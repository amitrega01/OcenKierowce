import React from "reactn";
import { Text, View } from "react-native";
import Styles from "../consts/Styles";
import BigButton from "../components/BigButton";
export class FirstRunScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={Styles.wrapper}>
        <BigButton
          color="#151146"
          title="Zarejestruj się"
          onPress={() => alert("Rejestracja")}
          width="80%"
        />
        <BigButton
          color="#00D463"
          title="Zaloguj się"
          onPress={() => alert("Logowanie")}
          width="80%"
        />
        <BigButton color="#000" title="Anonimowo" width="80%" />
      </View>
    );
  }
}
export default FirstRunScreen;
