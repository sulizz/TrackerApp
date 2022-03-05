import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthForm
            title="Sign Up"
            email={email}
            password={password}
            state={state}
            action={signup}
            setEmail={setEmail}
            setPassword={setPassword}
            navigation={navigation}
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

const styles = StyleSheet.create({
    container: {
        flex: 1, //to take over all the possible
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 200,
    },
    signUpButtonStyle: {
        borderRadius: 30,
        width: 220,
        marginVertical: 10,
    },

    errorMessage: {
        color: "red",
    },
});

export default SignupScreen;
