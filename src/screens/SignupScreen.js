import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                title="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <NavLink
                buttonTitle="Already have an account? Sign in"
                routeName="Signin"
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

//doesnt show the header
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SignupScreen;
