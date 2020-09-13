import React, {useState} from 'react';
import {Alert, Button, TextInput, Text, View, StyleSheet,TouchableOpacity,StatusBar} from 'react-native';
import * as regex from '../../Regex/regex'
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
    ValidEmail: 'Please enter valid Email',
    ValidMobile: 'Please enter valid mobile',
    ValidPassword: 'Password should contain min 8 char with one special, one small , one Capital & one Number.',
    PasswordShouldMatch:'Password does not match'

};
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const [validateRegex, setValidateRegex]= useState({})

    const onLogin = () => {
        if (isFormEmpty()) {
            setValidationError(ValidationErrors.FormEmpty);
        } else if (name.length === 0) {
            setValidationError(ValidationErrors.NameEmpty);
        } else if (email.length === 0) {
            setValidationError(ValidationErrors.EmailEmpty);
        } else if (mobileNumber.length === 0) {
            setValidationError(ValidationErrors.MobileNumberEmpty);
        } else if (userName.length === 0) {
            setValidationError(ValidationErrors.UsernameEmpty);
        } else if (password.length === 0) {
            setValidationError(ValidationErrors.PasswordEmpty);
        } else if (confirmPassword.length === 0) {
            setValidationError(ValidationErrors.ConfirmPasswordEmpty);
        }
        else {
            Alert.alert('Credentials', `${userName} + ${password}`);
        }
    };

    const isFormEmpty=()=>{
        return (name.length===0 && email.length===0 &&
            mobileNumber.length===0 &&
            userName.length===0 && password.length===0);
    }

   const regexValidation=(type, value)=>{
    if(type==='input-email')
    {
        setEmail(value);
        setValidateRegex({...validateRegex, [type]: regex.emailRegex.test(value)})
    } 
    if(type==='input-mobile'){
        setMobileNumber(value)
        setValidateRegex({...validateRegex, [type]: regex.mobileRegex.test(value)})
    } 
    if(type==='input-password'){
        setPassword(value)
        setValidateRegex({...validateRegex, [type]: regex.passwordRegex.test(value)})
    } 
    if(type==='input-confirm-password'){
        setConfirmPassword(value)
        setValidateRegex({...validateRegex, [type]: regex.passwordRegex.test(value)})
    } 
   }

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
                    onChangeText={(text) => regexValidation('input-email',text)}
                    placeholder={'Email Id'}
                    style={styles.input}
                />
                {validateRegex && !validateRegex['input-email']&& email.length>0 &&
                  <Text
                      testID={'input-email-error'}
                      style={{top:-20,  alignItems:'flex-start', color:'red'}}>
                      {ValidationErrors.ValidEmail}
                </Text>
                }
              
                <TextInput
                    testID={'input-mobile'}
                    maxLength={10}
                    keyboardType = 'numeric'
                    value={mobileNumber}
                    onChangeText={(text) => regexValidation('input-mobile', text)}
                    placeholder={'Mobile Number'}
                    style={styles.input}
                />
                {validateRegex && !validateRegex['input-mobile']&& mobileNumber.length >0 &&
                 <Text style={{top:-20,  alignItems:'flex-start', color:'red'}}>
                     {ValidationErrors.ValidMobile}
               </Text>}
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
                    onChangeText={(text) => regexValidation('input-password', text)}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                {validateRegex && !validateRegex['input-password']&& password.length >0 &&
                 <Text style={{top:-20,  alignItems:'flex-start', color:'red'}}>
                     {ValidationErrors.ValidPassword}
               </Text>
                }
                <TextInput
                    testID={'input-confirm-password'}
                    value={confirmPassword}
                    onChangeText={(text) => regexValidation('input-confirm-password', text)}
                    placeholder={'Confirm Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
                {validateRegex && !validateRegex['input-mobile']&& confirmPassword.length >0 && password === confirmPassword &&
               <Text style={{top:-20,  alignItems:'flex-start', color:'red'}}>
                   {ValidationErrors.PasswordShouldMatch}
               </Text>}
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