<h1> React-Native Testing </h1>

<h3>
  Quick Summary
  </h3>
  <p>
    Testing gives confidence in written code. In the context of this article, ‘testing’ means ‘automated testing’. Without automated testing, it is significantly harder to ensure the quality of a web application of significant complexity. Fails caused by automated testing may lead to more bugs in production. In this article, we’re going to show how React developers can quickly start testing their app with the React Testing Library (RTL).
  </p>
  
  <h3> Why You Should Test Your Code </h3>
  <p>
  Before shipping your software to end-users, you first have to confirm that it is working as expected. In other words, the app should satisfy its project specifications.
  
  Just as it is important to test our project as a whole before shipping it to end-users, it’s also essential to keep testing our code during the lifetime of a project. This is necessary for a number of reasons. We may make updates to our application or refactor some parts of our code. A third-party library may undergo a breaking change. Even the browser that is running our web application may undergo breaking changes. In some cases, something stops working for no apparent reason — things could go wrong unexpectedly. Thus, it is necessary to test our code regularly for the lifetime of a project.

Broadly speaking, there are manual and automated software tests. In a manual test, a real user performs some action on our application to verify that they work correctly. This kind of test is less reliable when repeated several times because it’s easy for the tester to miss some details between test runs.

In an automated test, however, a test script is executed by a machine. With a test script, we can be sure that whatever details we set in the script will remain unchanged on every test run.

This kind of test gives us the benefits of being predictable and fast, such that we can quickly find and fix bugs in our code.

Having seen the necessity of testing our code, the next logical question is, what sort of automated tests should we write for our code? Let’s quickly go over a few of them.
</p>


### Login Screen 

<img src="https://user-images.githubusercontent.com/17780617/92988351-57bfd080-f4e8-11ea-98d6-4cbaf08305ce.png" />

### Component Testing in React Native


To install this library as a dev-dependency, run the following command in your terminal - 


``` yarn add --dev @testing-library/react-native ```

### Here’s what your package.json file should look like - 

```
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
```




### Create folder in your project name
src=>Screens=>LoginScreen

### Create Component Name Login.js in LoginScreen folder

### Copy the code and paste your Login.js file from

```
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

```

### Create another file for style name style.js in your LoginScreen Folder and copy & paste the code from 
```
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    container: {
        padding: 20
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    errorText: {
        marginVertical: 10,
        color: 'red',
    },
    input:{
        height: 50,
        width:'80%',
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius:20,
        padding: 10,
        color: '#2c3e50'
    },
    buttonContainer:{
        width:'80%',
        borderRadius:20,
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});

```







# Possible Test Cases of the Login Screen Should like 


For our Login Screen, let’s say we have the following business requirements -
<ul>
<li>Test Case 1 : Login Screen (i.e. the component) should display (render) correctly (SnapshotTesting)</li>
<li>Test Case 2 : user submits empty form (no username or password provided)</li>
<li>Test Case 3 : . user submits form with either username only</li>
  <li>Test Case 4 : . user submits form with either password only</li>
  <li>Test Case 5 : On press of submit button (LOGIN), it should show an Alert dialog ( as we’re not doing any server calls in this post).</li>
</ul>


We can write one test for each of these requirements.
Let’s go !

### UI Testing

Let’s write our first, very basic component test that will let us test if our component renders correctly. This is what we call Snapshot Testing.
Snapshot Testing basically help us identify unknown UI changes made to our component.
Here’s what the snapshot test looks like -
```
import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
describe('Login Form', () => {
  it('renders correctly', () => {
    const wrapper = render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});

```

As you can see, we’ve used the render method provided by react-native-testing-library to generate our snapshot. It deeply renders given React element and returns helper methods to query the output components.

For now, we’ve created the component wrapper only in 1 test. But we’ll need this wrapper instance for each of our tests. Thus, we can make use of beforeEach utility provided by Jest to render our wrapper before each test.

We also want each test to be isolated from each other — thus, we need to perform un-mounting (“clean up”) after each test. This can be done by using afterEach.

```
import {render, cleanup} from '@testing-library/react-native';
describe('Login Form', () => {
  let wrapper;
beforeEach(() => {
    wrapper = render(<App />);
  });
afterEach(() => {
    cleanup();
    wrapper = null;
  });
it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

```


Let’s run our test and see what our Snapshot really looks like. Since this is our first time running the snapshot test, and it is the ONLY test in our project, we can simply do so by running the following shell command -

```   yarn test ```  (For run the test cases of project)     

If all goes well, you should see a ‘snapshots’ folder created under the __snapshot__ directory, containing the snapshot (component tree).

As you can see in Login.test.js.snap, proper styling has been applied to each element, and each element in the component tree has been given the correct testID and other props as well.

Also, in case we ever update our style or props, our snapshot test will fail, indicating a change in the UI.

Let’s update the ‘backgroundColor’ property of our ‘container’ style to ‘white’ from ‘#ecf0f1’ and re-run our test to see if our snapshot fails.

<img src="https://user-images.githubusercontent.com/17780617/92904842-cfd2bb80-f440-11ea-98e1-30ac5f79ed05.png" />

As you can see, Jest expected a backgroundColor of ‘#ecf0f1’ but received the value ‘white’ in its place. We can run yarn test -u in order to update our snapshot since our change was intentional. But please be wary of updating snapshots — always make sure you don’t update snapshots without knowing what caused the UI changes.
So Now update your snapshot using this command: 
```   yarn test -u ```   (For run and update snapshot  the test cases of project)

When we update our snapshot (to make sure our background changes are reflected in our snapshot), we get the following message -
<img src="https://user-images.githubusercontent.com/17780617/92905300-2cce7180-f441-11ea-9b28-07d76ae9845f.png" />


### UI testing part has been completed now we will move to <h1> Interaction testing </h1>


### Test Case 2 : user submits empty form (no username or password provided)
So in this case User simple press Login button without entering UserName and Password field then We should show a validation error message like Form is empty.
Let's start write test case
```
it("shows 'form-fields-empty' error if user submits without username or password", () => {
        const {getByTestId} = wrapper;
        const submitButton = getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children)
            .toBe(ValidationErrors.FormEmpty);
    });
```

### Test Case 3 : . user submits form with  username only
So in this case User simple press Login button with entering UserName only then We should show a validation error message like Password field is empty.
Let's start write test case
```
it('shows error if user submits only a username', () => {
        const {getByTestId} = wrapper;
        const userNameText = getByTestId('input-username');
        const enteredUserName = 'RohitBansal';
        fireEvent(userNameText, 'onChangeText', enteredUserName);

        const submitButton = getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');

        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.PasswordEmpty);
    });
```

### Test Case 4 : . user submits form with either password only
So in this case User simple press Login button with entering Password field only then We should show a validation error message like UserName field is empty.
Let's start write test case
```
it('shows error if user submits only a password', () => {
        const {getByTestId} = wrapper;
        const passwordText = getByTestId('input-password');
        const password = '12345678';
        fireEvent(passwordText, 'onChangeText', password);

        const submitButton = getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');

        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.UsernameEmpty);
    });
```

### Test Case 5 : On press of submit button (LOGIN), it should show an Alert dialog ( as we’re not doing any server calls in this post)
So in this case User simple press Login button with entering UserName and Password field  then We should show a success alert  message like Login Successful
Let's start write test case
```
 it('should show Alert dialog if form validation successful', async () => {
        const {getByTestId} = wrapper;

        // Enter Username
        const userNameText = getByTestId('input-username');
        const enteredUserName = 'RohitBansal';
        fireEvent(userNameText, 'onChangeText', enteredUserName);

        // Enter Password
        const passwordText = getByTestId('input-password');
        const enteredPassword = '123456';
        fireEvent(passwordText, 'onChangeText', enteredPassword);

        // Press Submit Button
        const submitButton = getByTestId('submit-button');
        fireEvent.press(submitButton);

        // Check if Alert.alert() has been called
        const alertSpy = jest.spyOn(Alert, 'alert');
        expect(alertSpy).toHaveBeenCalled();
    });
```


