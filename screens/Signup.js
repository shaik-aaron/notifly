import firebaseConfig from '../firebase';
import {
  Pressable,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {initializeApp} from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import React, {useState, useEffect} from 'react';

import styles from './Stylesheets/Signup-Stylesheet';

const Signup = () => {

  const navigation = useNavigation();

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSignUpData() {
    setLoading(prevLoading => !prevLoading);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .catch(error => alert(error.message));
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        navigation.replace('Home');
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>
          Hello! Tell me more about yourself:
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          onChangeText={text => setName(text)}
          placeholderTextColor={'#3c2a21'}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setEmail(text)}
          placeholderTextColor={'#3c2a21'}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholderTextColor={'#3c2a21'}
          placeholder="Password"
          style={styles.input}
        />
        <Pressable onPress={handleSignUpData} style={styles.submit}>
          {loading ? (
            <ActivityIndicator size="large" color="black" />
          ) : (
            <Text style={styles.submitText}>Submit</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default Signup;
