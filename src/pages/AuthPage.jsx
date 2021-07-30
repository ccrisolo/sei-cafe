import React, { useState } from "react";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";

const AuthPage = ({ setUser }) => {
    const [signUpForm, setSignUpForm] = useState(true);

    return (
        <main>
            <h1>AuthPage</h1>
            {signUpForm ? (
                <SignUpForm setUser={setUser} />
            ) : (
                <LoginForm setUser={setUser} />
            )}
            <button onClick={() => setSignUpForm(!signUpForm)}>
                {signUpForm ? "Already a user? Click to login" : "Sign Up"}
            </button>
        </main>
    );
};

export default AuthPage;
