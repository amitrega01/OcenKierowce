import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
  wrapper: {
    paddingTop: 24,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9FAFE',
  },
  textInput: {
    width: 80 + '%',
    padding: 12,
    borderRadius: 16,
    elevation: 4,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 25,
  },
  bigText: {
    fontSize: 32,
    fontWeight: 'bold',
    padding: 32,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 12.5,
  },

  textInputSingUp: {
    width: 80 + '%',
    padding: 10,
    borderRadius: 16,
    elevation: 4,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 25,
  },
  mediumText: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    width: '100%',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.75)',
  },
}));
