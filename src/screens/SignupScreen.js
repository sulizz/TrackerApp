import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

//morning --> 4am - 12pm
//afternoon --> 12pm - 5pm
//evening --> 5pm to 10pm
//night --> 10pm --> 4am

const greeting = () => {
    const date = parseInt(new Date().getHours());
    let message = "";
    if (date < 12) {
        message = "Good Morning";
    } else if (date >= 12 && date < 17) {
        message = "Good Afternoon";
    } else if (date >= 17 && date < 24) {
        message = "Good Evening";
    }

    return message;
};

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [greetings, setGreetings] = useState("hi");

    useEffect(() => {
        console.log("greetings");
        setGreetings(greeting());
    }, []);

    return (
        <View style={styles.container}>
            <Text h3>{greetings}</Text>
            <Spacer />
            <Spacer>
                <Text h3>Sign Up</Text>
            </Spacer>
            <Input
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setUsername(newValue)}
                // errorMessage="ENTER A VALID ERROR HERE"
            />
            <Input
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setPassword(newValue)}

                // errorMessage="ENTER A VALID ERROR HERE"
            />
            <Button
                title="Sign Up"
                onPress={() => signup({ email, password })}
                style={styles.signUpButtonStyle}
            />
            <Spacer />
            <Button
                title="Already have an account? Sign In"
                onPress={() => navigation.navigate("Signin")}
                type="outline"
                raised
                titleStyle={styles.signinTitle}
                containerStyle={styles.signinButton}
            />
        </View>
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
    signinButton: {
        borderColor: "rgba(78, 116, 289, 1)",
        width: 300,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    signinTitle: {
        color: "rgba(78, 116, 289, 1)",
    },
});

export default SignupScreen;
