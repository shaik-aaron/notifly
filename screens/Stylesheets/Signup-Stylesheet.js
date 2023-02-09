import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c2a21',
  },
  welcome: {
    flex: 2,
  },
  welcomeText: {
    color: 'white',
    fontFamily: 'Raleway-Bold',
    fontSize: 28,
    marginLeft: 20,
    marginTop: 40,
  },
  form: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontFamily: 'Raleway-Regular',
    width: 340,
    color: '#3c2a21',
    fontSize: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  submit: {
    marginTop: 40,
    width: 340,
    height: 48,
    backgroundColor: '#D5CEA3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  submitText: {
    fontFamily: 'Raleway-Bold',
    fontSize: 18,
    color: 'black',
  },
});

export default styles;
