import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c2a21',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontFamily: 'Raleway-Bold',
    marginTop: 20,
    marginBottom: 20,
    color: 'white',
    fontSize: 24,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  option: {
    alignSelf: 'stretch',
    height: 72,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionDark: {
    alignSelf: 'stretch',
    height: 72,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: 'Raleway-Bold',
    color: 'white',
    fontSize: 16,
    paddingLeft: 20,
  },
  optionTextDark: {
    fontFamily: 'Raleway-Bold',
    color: '#3c2a21',
    fontSize: 16,
    paddingLeft: 20,
  },
  inputField: {
    marginTop: 40,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    fontFamily: 'Raleway-Bold',
    color: 'white',
  },
  inputForm: {
    width: 120,
    fontFamily: 'Raleway-Regular',
    fontSize: 24,
    color: 'white',
  },
  notification: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D5CEA3',
    borderRadius: 10,
    alignSelf: 'stretch',
    height: 72,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  notificationText: {
    fontFamily: 'Raleway-Bold',
    color: 'black',
    fontSize: 18,
  },
});

export default styles;
