import React from 'reactn';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  static navigationOptions = {
    header: null,
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  }
  snap = async () => {
    console.log('Button Pressed');
    if (this.camera) {
      console.log('Taking photo');
      const options = {
        quality: 0,
        base64: true,
        fixOrientation: true,
        exif: true,
        skipProcessing: true,
      };
      await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;

        this.setGlobal({
          lastPhoto: photo.uri,
        });
        this.props.navigation.navigate('NewMessage');
      });
    }
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    } else {
      return (
        <View
          style={{
            flex: 1,
          }}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            autoFocus={false}
            useCamera2Api={true}
            style={{
              flex: 1,
            }}
            type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingBottom: 24,
              }}>
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => this.snap()}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderWidth: 2,
                    borderRadius: 60,
                    borderColor: '#FFFFFF',
                  }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
