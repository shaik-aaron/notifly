import auth from '../firebase-auth';
import {
  Pressable,
  Text,
  TextInput,
  View,
  LogBox,
  ActivityIndicator,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMugSaucer} from '@fortawesome/free-solid-svg-icons';
import React, {useEffect, useState} from 'react';
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';

import styles from './Stylesheets/Login-Stylesheet';

const Login = () => {
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        navigation.replace('Home');
        setLoading(prevLoading => !prevLoading);
      }
    });

    return unsubscribe;
  }, []);

  function handleSignUp() {
    navigation.navigate('Signup');
  }

  function handleSignIn() {
    setLoading(prevLoading => !prevLoading);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => {
        setLoading(prevLoading => !prevLoading);
        alert(error.message);
      });
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifly</Text>
        <FontAwesomeIcon size={40} color={'white'} icon={faMugSaucer} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          style={styles.input}
          placeholderTextColor="#3c2a21"
          placeholder="Email"
          onChangeText={text => setEmail(text)}></TextInput>
        <TextInput
          value={password}
          placeholderTextColor="#3c2a21"
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry></TextInput>
        <Pressable style={styles.login} onPress={handleSignIn}>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </Pressable>
        <Pressable
          borderColor="#3c2a21"
          style={styles.signup}
          onPress={handleSignUp}>
          <Text style={styles.signupText}>
            Don't have an acount? Sign up here!
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
