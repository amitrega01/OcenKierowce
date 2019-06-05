import React from "reactn";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image
} from "react-native";
import Styles from "../consts/Styles";
import MessageTypeSelector from "../components/MessageTypeSelector";
import BigButton from "../components/BigButton";
import BackButton from "../components/BackButton";
import AboutYou from "../containers/AboutYou";
import * as firebase from "firebase";

export class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  render() {
    return <AboutYou />;
  }
}
export default AboutScreen;
