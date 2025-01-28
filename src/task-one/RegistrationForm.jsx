import React from 'react';
import './RegistrationForm.css';
import useRegistrationValidation from "./useRegistrationValidation";

function RegistrationForm() {
    const handleRegistrationSubmit = (userData) => {
        alert(JSON.stringify(userData, null, 2));
    };


    const {
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
    } = useRegistrationValidation(handleRegistrationSubmit);


    return (
        <div className="registration-container">
            <div className="error-display">{validationError}</div>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="input-field"
                    onChange={(e) => setEnteredFirstName(e.target.value)}
                    value={enteredFirstName}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="input-field"
                    onChange={(e) => setEnteredLastName(e.target.value)}
                    value={enteredLastName}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input-field"
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    value={enteredEmail}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                    onChange={(e) => setEnteredPassword(e.target.value)}
                    value={enteredPassword}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="input-field"
                    onChange={(e) => setEnteredConfirmPassword(e.target.value)}
                    value={enteredConfirmPassword}
                />
                <button type="submit" className="submit-button">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;