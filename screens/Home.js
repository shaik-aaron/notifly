import auth from '../firebase-auth';
import database from '../firebase-database';
import {set, ref, onValue} from 'firebase/database';
import {createAvatar} from '@dicebear/core';
import {SvgXml} from 'react-native-svg';
import {adventurer} from '@dicebear/collection';
import {
  Text,
  View,
  BackHandler,
  Alert,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

import styles from './Stylesheets/Home-Stylesheet';

const Home = () => {
  //This creates the avatar
  const avatar = createAvatar(adventurer, {
    seed: auth.currentUser?.displayName ?? 'Default',
  });

  function writeNotification() {
    set(ref(database, 'notifications/'), {
      messageTitle: 'Come Sendhoor',
      messageBody: auth.currentUser?.displayName + ' Wants to meet at ' + time,
    });
  }

  //This draws it.
  const svg = avatar.toString();
  const [time, setTime] = useState('');

  //In case the user hits the back button (Temp fix)
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

  //Main function
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>{`Welcome, ${
          auth.currentUser?.displayName ?? 'uhhhhh'
        }!`}</Text>
        <SvgXml width="80" height="80" xml={svg} />
      </View>
      <Text style={styles.mainText}>Let your friends know you wanna meet.</Text>
      <View style={styles.form}>
        <Text style={styles.formText}>Set a time: </Text>
        <TextInput
          value={time}
          onChangeText={text => setTime(text)}
          underlineColorAndroid={'white'}
          style={styles.formInput}></TextInput>
      </View>
      <Pressable onPress={writeNotification} style={styles.button}>
        <Text style={styles.buttonText}>Send a Notification!</Text>
      </Pressable>
    </View>
  );
};

export default Home;
