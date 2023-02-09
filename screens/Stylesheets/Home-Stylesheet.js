import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c2a21',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  welcome: {
    fontFamily: 'Raleway-Regular',
    fontSize: 28,
    color: 'white',
  },
  mainText: {
    fontFamily: 'Raleway-Regular',
    marginTop: 20,
    marginLeft: 20,
    fontSize: 28,
    color: 'white',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
  },
  formText: {
    fontFamily: 'Raleway-Regular',
    fontSize: 28,
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },
  formInput: {
    fontSize: 28,
    fontFamily: 'Raleway-Regular',
    width: 100,
    color: 'white',
  },
  button: {
    width: 200,
    height: 40,
    marginLeft: 20,
    marginTop: 80,
    backgroundColor: '#D5CEA3',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  buttonText: {
    fontFamily: 'Raleway-Bold',
    color: 'black',
    fontSize: 16,
  },
});

export default styles;
