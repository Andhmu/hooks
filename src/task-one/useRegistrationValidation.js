import { useState, useCallback } from 'react';

const useRegistrationValidation = (onRegistration) => {
    const [enteredFirstName, setEnteredFirstName] = useState('');
    const [enteredLastName, setEnteredLastName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState('');

    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const isValidPassword = (password) => {
        if (password.length < 5) {
            return false;
        }
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return hasNumber && hasSpecialChar;
    };


    const validateRegistrationForm = () => {
        if (!enteredFirstName) {
            setValidationError("First name is required");
            return false;
        }
        if (!enteredLastName) {
            setValidationError("Last name is required");
            return false;
        }
        if (!isValidEmail(enteredEmail)) {
            setValidationError("Email is not valid");
            return false;
        }
        if (!isValidPassword(enteredPassword)) {
            setValidationError("Password must be at least 5 characters long and include numbers and special characters.");
            return false;
        }

        if (enteredPassword !== enteredConfirmPassword) {
            setValidationError("Passwords do not match");
            return false;
        }
        setValidationError('');
        return true;
    };

    const handleFormSubmit = useCallback(
        (event) => {
            event.preventDefault();
            if(validateRegistrationForm()){
                onRegistration({
                    firstName: enteredFirstName,
                    lastName: enteredLastName,
                    email: enteredEmail,
                    password: enteredPassword,
                    confirmPassword: enteredConfirmPassword
                })
                setEnteredFirstName('');
                setEnteredLastName('');
                setEnteredEmail('');
                setEnteredPassword('');
                setEnteredConfirmPassword('');
            }
        },
        [onRegistration, enteredFirstName, enteredLastName, enteredEmail, enteredPassword, enteredConfirmPassword, validateRegistrationForm]
    );

    return {
        enteredFirstName,
        setEnteredFirstName,
        enteredLastName,
        setEnteredLastName,
        enteredEmail,
        setEnteredEmail,
        enteredPassword,
        setEnteredPassword,
        enteredConfirmPassword,
        setEnteredConfirmPassword,
        validationError,
        handleFormSubmit,
    };
};

export default useRegistrationValidation;