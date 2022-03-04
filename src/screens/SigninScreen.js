import React from "react";
import { StyleSheet } from "react-native";
import { Input, Icon, Text } from "react-native-elements";
const SigninScreen = () => {
    return (
        <>
            <Text h3>Sign In</Text>
            <Input
                placeholder="Username"
                // errorMessage="ENTER A VALID ERROR HERE"
            />
            <Input
                placeholder="Password"
                secureTextEntry={true}
                // errorMessage="ENTER A VALID ERROR HERE"
            />
        </>
    );
};
const styles = StyleSheet.create({});
export default SigninScreen;
