import React from 'reactn';
import { Text, Modal, View } from 'react-native';
import BackButton from '../components/BackButton';

export class OpinionDetailsModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        style={{ marginTop: 24 }}
        animationType='slide'
        visible={this.props.visible}>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <BackButton onPress={() => this.props.callback()} />
          <Text>{JSON.stringify(this.props.alert)}</Text>
        </View>
      </Modal>
    );
  }
}
export default OpinionDetailsModal;
