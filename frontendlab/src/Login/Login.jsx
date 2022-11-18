import React, {useState} from "react";
import ReactDOM from "react-dom";
import "./login.css";

function Login(){
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

      // User Login info
    const database = [
    {
      email: "user1@gmail.com",
      password: "pass1"
    },
    {
      email: "user2@gmail.com",
      password: "pass2"
    }
    ];

    const errors = {
        email: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var {email, pass} = document.forms[0];
        const userData = database.find((user) => user.email === email.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
        // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
        }
        } else {
        // Username not found
            setErrorMessages({ name: "email", message: errors.email });
        }
    };

    //JSX code for error message
    const renderErrorMessage = (name) =>
        name == errorMessages.name && (
            <div className="error"> {errorMessages.message}</div>
    );

    //JSX Login
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name ="email" required />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name ="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" value = "Login" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="Login">
            <div className="login-page">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
        </div>
    )    
}
export default Login;
