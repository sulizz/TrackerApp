import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import Greeting from "./Greeting";
const AuthForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <>
            <Greeting />
            <Spacer />
            <Text h3>{props.title}</Text>
            <Input
                placeholder="Email"
                value={email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => setEmail(newValue)}
            />
            <Input
                placeholder="Password"
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            {props.errorMessage ? (
                <Text style={styles.erroMessageStyle}>
                    {props.errorMessage}
                </Text>
            ) : null}
            <Button
                title={props.title}
                onPress={() =>
                    props.onSubmit({
                        email: email,
                        password: password,
                    })
                }
            />
            <Spacer />
        </>
    );
};

const styles = StyleSheet.create({
    erroMessageStyle: {
        color: "red",
        marginBottom: 16,
    },
});

export default AuthForm;
