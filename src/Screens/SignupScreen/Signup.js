import React, {useState} from 'react';
import {Alert, Button, TextInput, Text, View, StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import styles from "./styles";

export const ValidationErrors = {
    FormEmpty: 'Form fields cannot be blank',
    NameEmpty: 'Name cannot be blank',
    EmailEmpty: 'Email cannot be blank',
    MobileNumberEmpty: 'Mobile number cannot be blank',
    UsernameEmpty: 'Username cannot be blank',
    PasswordEmpty: 'Password cannot be blank',
    ConfirmPasswordEmpty: 'Confirm Password cannot be blank',
    PasswordMatch: 'Password should be match',
};
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
        <View style={styles.mainContainer}>
            {validationError.length !== 0 && (
                <Text testID={'text-error'} style={styles.errorText}>
                    {validationError}
                </Text>
            )}

            <View style={styles.loginContainer}>
                <StatusBar barStyle="light-content"/>
                <TextInput
                    testID={'input-name'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                    placeholder={'Name'}
                    style={styles.input}
                />
                <TextInput
                    testID={'input-email'}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholder={'Email Id'}
                    style={styles.input}
                />
                <TextInput
                    testID={'input-mobile'}
                    value={mobileNumber}
                    onChangeText={(text) => setMobileNumber(text)}
                    placeholder={'Mobile Number'}
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
                <TextInput
                    testID={'input-confirm-password'}
                    value={confirmPassword}
                    onChangeText={(text) => setConfirmPassword(text)}
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                <TouchableOpacity
                    testID={'submit-button'}
                    style={styles.buttonContainer}
                    onPress={onLogin}>
                    <Text  style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default Signup;