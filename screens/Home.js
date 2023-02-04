import {StyleSheet, Text, View, BackHandler, Alert} from 'react-native';
import React from 'react';

const Home = () => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to exit the app?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Let your friends know you wanna meet.</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3c2a21',
  },
  header: {
    fontFamily: 'Raleway-Bold',
    marginTop: 100,
    marginLeft: 20,
    fontSize: 40,
    color: 'white',
  },
});
