import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFE',

  },
  textInput: {
    width:80+"%",
    padding: 12,
    borderRadius: 16,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
}));

