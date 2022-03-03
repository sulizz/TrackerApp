import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = (props) => {
    console.log(props.navigation);
    return (
        <View>
            <Text>SignupScreen</Text>
            <Button
                title="Sign In"
                onPress={() => props.navigation.navigate("Signin")}
            />
            <Button
                title="Main Flow"
                onPress={() => props.navigation.navigate("mainFlow")}
            />
        </View>
    );
};
const styles = StyleSheet.create({});
export default SignupScreen;
