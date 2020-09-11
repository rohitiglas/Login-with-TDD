import 'react-native';
import React from 'react';
import App, {ValidationErrors} from './Login';
import {render, cleanup, fireEvent} from '@testing-library/react-native';
import {Alert} from "react-native";

jest.mock('react-native/Libraries/Alert/Alert', () => ({
    alert: jest.fn(),
}));

describe('Login Form', () => {
    let wrapper;
    // beforeEach() utility provided by Jest to render our wrapper before each test
    beforeEach(() => {
        wrapper = render(<App />);
    });
    // We also want each test to be isolated from each other —
    // thus, we need to perform un-mounting (“clean up”)
    // after each test. This can be done by using afterEach().
    afterEach(() => {
        cleanup();
        wrapper = null;
    });
    // Login Form Screen (i.e. the component) should display (render) correctly
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });


//   Login Form should show validation error if -
//       a. user submits empty form (no username or password provided) ✅
//       b. user submits form with either username or password missing. ✅

    it("shows 'form-fields-empty' error if user submits without username or password", () => {
        const {getByTestId} = wrapper;
        const submitButton = getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children)
            .toBe(ValidationErrors.FormEmpty);
    });

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
});
