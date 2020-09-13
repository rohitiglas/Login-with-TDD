import 'react-native';
import React from 'react';
import Signup,{ValidationErrors} from "./Signup";
import {render,cleanup,fireEvent} from "@testing-library/react-native";
import {Alert} from "react-native";

jest.mock('react-native/Libraries/Alert/Alert', () => ({
    alert: jest.fn(),
}));

describe('Signup Form',()=>{
    let wrapper;
    beforeEach(()=>{
      wrapper=render(<Signup/>);
    });

    afterEach(()=>{
       cleanup();
       wrapper=null;
    });


     //UI Testing
     it('Should display renders correctly',()=>{
         expect(wrapper).toMatchSnapshot();
     });

    it("shows 'form-fields-empty' error if All field empty", () => {
        const {getByTestId} = wrapper;
        const submitButton = getByTestId('submit-button');
        fireEvent.press(submitButton);
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children)
            .toBe(ValidationErrors.FormEmpty);
    });

    it('Show error if user left Name field',()=>{
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.NameEmpty);
    });

    it('Show error if user left email field',()=>{
        const {getByTestId}=wrapper;
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.EmailEmpty);
    });

    it('Show error if user left mobile field',()=>{
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.MobileNumberEmpty);
    });

    it('Show error if user left userName field',()=>{
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.UsernameEmpty);
    });

    it('Show error if user left password field',()=>{
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.PasswordEmpty);
    });

    it('Show error if user left password field',()=>{
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const submitButton=getByTestId('submit-button');
        fireEvent(submitButton, 'onPress');
        const validationError = getByTestId('text-error');
        expect(validationError).toBeTruthy();
        expect(validationError.props.children).toBe(ValidationErrors.ConfirmPasswordEmpty);
    });

    it('should show Alert dialog if form validation successful', async () => {
        const {getByTestId}=wrapper;
        const emailText=getByTestId('input-email');
        const email='rohitiglas2@gmail.com';
        fireEvent(emailText,'onChangeText',email);
        const nameText=getByTestId('input-name');
        const name='Rohit Bansal';
        fireEvent(nameText,'onChangeText',name);
        const mobileText=getByTestId('input-mobile');
        const mobile='9643198239';
        fireEvent(mobileText,'onChangeText',mobile);
        const userNameText=getByTestId('input-username');
        const userName='RohitBansal';
        fireEvent(userNameText,'onChangeText',userName);
        const passwordText=getByTestId('input-password');
        const password='123456';
        fireEvent(passwordText,'onChangeText',password);
        const confirmPasswordText=getByTestId('input-confirm-password');
        const confirmPassword='123456';
        fireEvent(confirmPasswordText,'onChangeText',confirmPassword);

        // Press Submit Button
        const submitButton = getByTestId('submit-button');
        fireEvent.press(submitButton);

        // Check if Alert.alert() has been called
        const alertSpy = jest.spyOn(Alert, 'alert');
        expect(alertSpy).toHaveBeenCalled();
    });
})