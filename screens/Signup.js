import auth from '../firebase-auth';
import {
  Pressable,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import React, {useState} from 'react';

import styles from './Stylesheets/Signup-Stylesheet';

const Signup = () => {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUpData() {
    setLoading(prevLoading => !prevLoading);
    await createUserWithEmailAndPassword(auth, email, password).catch(err =>
      alert(err.message),
    );
    await updateProfile(auth.currentUser, {displayName: name}).catch(err =>
      alert(err.message),
    );
    await onAuthStateChanged(auth, user =>
      navigation.navigate('Home', () => {}),
    ).catch(err => alert(err.message));
  }

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
