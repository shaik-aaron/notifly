import database from '../firebase-database';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faRightFromBracket,
  faMugSaucer,
  faDumbbell,
  faBurger,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import {set, ref} from 'firebase/database';
import {createAvatar} from '@dicebear/core';
import {SvgXml} from 'react-native-svg';
import {adventurer} from '@dicebear/collection';
import {useNavigation} from '@react-navigation/native';
import {getAuth, signOut} from 'firebase/auth';
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
  const auth = getAuth();
  const navigation = useNavigation();

  //This creates the avatar
  const avatar = createAvatar(adventurer, {
    seed: auth.currentUser?.displayName ?? 'Default',
  });

  function writeNotification() {
    set(ref(database, 'notifications/'), {
      messageTitle: 'Come ' + location,
      messageBody: auth.currentUser?.displayName + ' Wants to meet at ' + time,
    });

    setIsSent(true);
  }

  //This draws it.
  const svg = avatar.toString();
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [isSent, setIsSent] = useState(false);

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

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => alert(error.message));
  }

  function setGym() {
    setLocation('Gym');
  }

  function setSendhoor() {
    setLocation('Sendhoor');
  }

  function setIfun() {
    setLocation('ifun');
  }

  function setSoumil() {
    setLocation(`Soumil's house`);
  }

  //Main function
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.navbar}>
          <SvgXml width="40" height="40" xml={svg} />
          <Pressable onPress={handleSignOut}>
            <FontAwesomeIcon
              size={20}
              color="white"
              icon={faRightFromBracket}
            />
          </Pressable>
        </View>
        <Text style={styles.heading}>Select a location:</Text>
        <Pressable onPress={setGym}>
          <View style={location == 'Gym' ? styles.optionDark : styles.option}>
            <View style={styles.details}>
              <FontAwesomeIcon
                size={20}
                color={location == 'Gym' ? '#3c2a21' : 'white'}
                icon={faDumbbell}
              />
              <Text
                style={
                  location == 'Gym' ? styles.optionTextDark : styles.optionText
                }>
                Gym
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={setSendhoor}>
          <View
            style={location == 'Sendhoor' ? styles.optionDark : styles.option}>
            <View style={styles.details}>
              <FontAwesomeIcon
                size={20}
                color={location == 'Sendhoor' ? '#3c2a21' : 'white'}
                icon={faMugSaucer}
              />
              <Text
                style={
                  location == 'Sendhoor'
                    ? styles.optionTextDark
                    : styles.optionText
                }>
                Sendhoor
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={setIfun}>
          <View style={location == 'ifun' ? styles.optionDark : styles.option}>
            <View style={styles.details}>
              <FontAwesomeIcon
                size={20}
                color={location == 'ifun' ? '#3c2a21' : 'white'}
                icon={faBurger}
              />
              <Text
                style={
                  location == 'ifun' ? styles.optionTextDark : styles.optionText
                }>
                ifun
              </Text>
            </View>
          </View>
        </Pressable>
        <Pressable onPress={setSoumil}>
          <View
            style={
              location == `Soumil's house` ? styles.optionDark : styles.option
            }>
            <View style={styles.details}>
              <FontAwesomeIcon
                size={20}
                color={location == `Soumil's house` ? '#3c2a21' : 'white'}
                icon={faHouse}
              />
              <Text
                style={
                  location == `Soumil's house`
                    ? styles.optionTextDark
                    : styles.optionText
                }>
                Soumil's place
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={styles.inputField}>
          <Text style={styles.input}>Set a Time: </Text>
          <TextInput
            style={styles.inputForm}
            onChangeText={text => setTime(text)}
            underlineColorAndroid={'white'}></TextInput>
        </View>
        <Pressable onPress={writeNotification}>
          <View style={styles.notification}>
            <Text style={styles.notificationText}>
              {isSent ? 'Sent!' : 'Send a Notification!'}
            </Text>
          </View>
        </Pressable>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;
