import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";

import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import NavLink from "../components/NavLink";
const SigninScreen = () => {
    const { state, signin } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                title="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />
            <NavLink
                buttonTitle="Don't have a account yet? Sign Up"
                routeName="Signup"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 200,
    },
});

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SigninScreen;
