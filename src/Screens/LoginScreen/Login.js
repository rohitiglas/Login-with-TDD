import React, {useState} from 'react';
import {Alert, Button, TextInput, Text, View, StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
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
            <View style={styles.mainContainer}>
                {validationError.length !== 0 && (
                    <Text testID={'text-error'} style={styles.errorText}>
                        {validationError}
                    </Text>
                )}

                <View style={styles.loginContainer}>
                    <StatusBar barStyle="light-content"/>
                <TextInput
                    testID={'input-username'}
                    value={userName}
                    onChangeText={(text) => setUserName(text)}
                    placeholder={'UserName'}
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
                <TouchableOpacity
                    testID={'submit-button'}
                    style={styles.buttonContainer}
                                  onPress={onLogin}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                </View>
            </View>

    );
};

export default Login;