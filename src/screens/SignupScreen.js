import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);

    return (
        <AuthForm
            title="Sign Up"
            state={state}
            navigation={navigation}
            onSubmit={({ email, password }) => signup({ email, password })}
            screenName={"Signin"}
            buttonTitle="Already have an account? Sign in"
        />
    );
};

//doesnt show the header
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SignupScreen;
