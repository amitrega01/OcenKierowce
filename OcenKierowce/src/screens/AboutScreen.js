import React from "reactn";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  FlatList
} from "react-native";
import Styles from "../consts/Styles";
import MessageTypeSelector from "../components/MessageTypeSelector";
import BigButton from "../components/BigButton";
import BackButton from "../components/BackButton";
import AboutYou from "../containers/AboutYou";
import * as firebase from "firebase";
import SearchBar from "../containers/SearchBar";

export class AboutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }
  async componentDidMount() {
    await this.fetchData();
  }
  async fetchData() {
    this.setState({ refreshing: true });
    console.log("USER DETAILS");
    let plate = this.global.toSearch;
    let data = await firebase
      .database()
      .ref("/messages/")
      .once("value")
      .then(function(snapshot) {
        let temp = [];
        snapshot.forEach(child => {
          if (child.val().plateNumber == plate)
            temp.push({
              ...child.val(),
              _id: child.key
            });
        });
        return temp.reverse();
      });
    console.log(data);
    this.setGlobal({ aboutYou: data });

    this.setState({ refreshing: false });
  }
  render() {
    return (
      <View style={[Styles.wrapper, { flex: 1 }]}>
        <Text style={Styles.mediumText}>Opinie o {this.global.toSearch}</Text>
        <FlatList
          onRefresh={() => {
            this.fetchData();
          }}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          refreshing={this.state.refreshing}
          style={{ width: " 100%" }}
          contentContainerStyle={{
            alignItems: "stretch",
            paddingHorizontal: 16
          }}
          horizontal={true}
          data={this.global.aboutYou}
          renderItem={({ item, separators }) => (
            <Opinion
              opinion={item}
              onPress={() => alert(JSON.stringify(item))}
            />
          )}
          keyExtractor={(item, index) => item._id}
        />
      </View>
    );
  }
}
export default AboutScreen;
