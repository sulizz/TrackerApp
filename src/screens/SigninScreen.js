import React, { useContext, useState } from "react";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);

    return (
        <AuthForm
            title="Sign In"
            state={state}
            onSubmit={({ email, password }) => signin({ email, password })}
            navigation={navigation}
            screenName={"Signup"}
            buttonTitle="Don't have a account yet? Sign Up"
        />
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SigninScreen;
