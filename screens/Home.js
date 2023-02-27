import auth from '../firebase-auth';
import database from '../firebase-database';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import {faDumbbell} from '@fortawesome/free-solid-svg-icons';
import {faBurger} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
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
  KeyboardAvoidingView,
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
      messageTitle: 'Come ' + location,
      messageBody: auth.currentUser?.displayName + ' Wants to meet at ' + time,
    });

    setIsSent(true);
  }

  //This draws it.
  const svg = avatar.toString();
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [isGym, setIsGym] = useState(false);
  const [isSendhoor, setIsSendhoor] = useState(false);
  const [isIfun, setIsIfun] = useState(false);
  const [isSoumil, setIsSoumil] = useState(false);
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

  function setGym() {
    setLocation('Gym');
    setIsGym(prev => !prev);
  }

  function setSendhoor() {
    setLocation('Sendhoor');
    setIsSendhoor(prev => !prev);
  }

  function setIfun() {
    setLocation('ifun');
    setIsIfun(prev => !prev);
  }

  function setSoumil() {
    setLocation(`Soumil's house`);
    setIsSoumil(prev => !prev);
  }

  //Main function
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <SvgXml width="40" height="40" xml={svg} />
        <FontAwesomeIcon size={20} color="white" icon={faRightFromBracket} />
      </View>
      <View style={styles.inputField}>
        <Text style={styles.input}>Set a Time: </Text>
        <TextInput
          style={styles.inputForm}
          onChangeText={text => setTime(text)}
          underlineColorAndroid={'white'}></TextInput>
      </View>
      <Text style={styles.heading}>Select a location:</Text>
      <Pressable onPress={setGym}>
        <View style={isGym ? styles.optionDark : styles.option}>
          <View style={styles.details}>
            <FontAwesomeIcon
              size={20}
              color={isGym ? '#3c2a21' : 'white'}
              icon={faDumbbell}
            />
            <Text style={isGym ? styles.optionTextDark : styles.optionText}>
              Gym
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={setSendhoor}>
        <View style={isSendhoor ? styles.optionDark : styles.option}>
          <View style={styles.details}>
            <FontAwesomeIcon
              size={20}
              color={isSendhoor ? '#3c2a21' : 'white'}
              icon={faMugSaucer}
            />
            <Text
              style={isSendhoor ? styles.optionTextDark : styles.optionText}>
              Sendhoor
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={setIfun}>
        <View style={isIfun ? styles.optionDark : styles.option}>
          <View style={styles.details}>
            <FontAwesomeIcon
              size={20}
              color={isIfun ? '#3c2a21' : 'white'}
              icon={faBurger}
            />
            <Text style={isIfun ? styles.optionTextDark : styles.optionText}>
              ifun
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={setSoumil}>
        <View style={isSoumil ? styles.optionDark : styles.option}>
          <View style={styles.details}>
            <FontAwesomeIcon
              size={20}
              color={isSoumil ? '#3c2a21' : 'white'}
              icon={faHouse}
            />
            <Text style={isSoumil ? styles.optionTextDark : styles.optionText}>
              Soumil's place
            </Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={writeNotification}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            {isSent ? 'Sent!' : 'Send a Notification!'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Home;
