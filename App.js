// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./src/Screens/LoginScreen/Login";
import Signup from "./src/Screens/SignupScreen/Signup";

function HomeScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Signup" component={Signup} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;