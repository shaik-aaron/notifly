/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import notifee from '@notifee/react-native';
import database from './firebase-database';
import {ref, onValue} from 'firebase/database';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Signup from './screens/Signup';

const Stack = createNativeStackNavigator();

const message = ref(database, 'notifications/');
onValue(message, snapshot => {
  const data = snapshot.val();

  notifee.displayNotification({
    title: data.messageTitle,
    body: data.messageBody,
    android: {
      channelId: 'default',
      smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });

  // Alert.alert(data.messageTitle, data.messageBody);
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
