# RNTesting
# Component Testing in React Native


Step1.  To install this library as a dev-dependency, run the following command in your terminal -


yarn add — dev @testing-library/react-native

Here’s what your package.json file should look like -

{
  "name": "TestingReactNative",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "dimension": "^0.1.6",
    "react": "16.13.1",
    "react-native": "0.63.2"
  },
  "devDependencies": {
    "@babel/core": "^7.11.1",
    "@babel/runtime": "^7.11.2",
    "@react-native-community/eslint-config": "^2.0.0",
    "@testing-library/react-native": "^7.0.2",
    "babel-jest": "^26.3.0",
    "eslint": "^7.7.0",
    "jest": "^26.4.0",
    "metro-react-native-babel-preset": "^0.62.0",
    "react-test-renderer": "16.13.1"
  },
  "jest": {
    "preset": "react-native"
  }
}


For our Login Screen, let’s say we have the following business requirements -
Login Screen (i.e. the component) should display (render) correctly (SnapshotTesting)
Login Screen should show validation error if -
a. user submits empty form (no username or password provided) ✅
b. user submits form with either username or password missing. ✅
On press of submit button (LOGIN), it should show an Alert dialog ( as we’re not doing any server calls in this post). ✅
We can write one test for each of these requirements.
Let’s go !


Create folder in your project name src=>Screens=>LoginScreen
Create Component Name Login.js in LoginScreen folder

Copy the code and paste your Login.js file

import React, {useState} from 'react';
import {Alert, Button, TextInput, Text, View, StyleSheet} from 'react-native';
import styles from "./styles";

export const ValidationErrors = {
    FormEmpty: 'Form fields cannot be blank',
    UsernameEmpty: 'Username cannot be blank',
    PasswordEmpty: 'Password cannot be blank',
};
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    const onLogin = () => {
        if (userName.length === 0 && password.length === 0) {
            setValidationError(ValidationErrors.FormEmpty);
        } else if (userName.length === 0) {
            setValidationError(ValidationErrors.UsernameEmpty);
        } else if (password.length === 0) {
            setValidationError(ValidationErrors.PasswordEmpty);
        }
        else {
            Alert.alert('Credentials', `${userName} + ${password}`);
        }
    };
    return (
        <View style={styles.container}>
            {validationError.length !== 0 && (
                <Text testID={'text-error'} style={styles.errorText}>
                    {validationError}
                </Text>
            )}

            <TextInput
                testID={'input-username'}
                value={userName}
                onChangeText={(text) => setUserName(text)}
                placeholder={'Username'}
                style={styles.input}
            />
            <TextInput
                testID={'input-password'}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                testID={'submit-button'}
                title={'Login'}
                style={styles.input}
                onPress={onLogin}
            />
        </View>
    );
};

export default Login;



Create another file for style name style.js in your LoginScreen Folder and copy & paste the code

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    errorText: {
        marginVertical: 10,
        color: 'red',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});


