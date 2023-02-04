import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C2A21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 1 / 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 40,
    color: 'white',
    marginRight: 10,
    letterSpacing: 2,
  },
  mug: {
    fontSize: 40,
  },
  inputContainer: {
    flex: 1 / 2,
  },
  input: {
    fontFamily: 'Raleway-Regular',
    backgroundColor: 'white',
    color: '#3c2a21',
    width: 300,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    fontSize: 16,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5CEA3',
    width: 300,
    height: 48,
    borderRadius: 16,
    marginTop: 20,
  },
  loginText: {
    color: 'black',
    fontFamily: 'Raleway-Bold',
    borderColor: 'white',
    fontSize: 16,
  },
  signup: {
    width: 300,
    marginTop: 20,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3c2a21',
    borderRadius: 20,
  },
  signupText: {
    fontFamily: 'Raleway-Regular',
    color: 'white',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 4,
    marginTop: 20,
    borderRadius: 20,
    width: 298,
  },
});

export default styles;
