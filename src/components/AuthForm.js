import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AuthForm = (props) => {
    return (
        <View style={styles.container}>
            <Text h3>{props.title}</Text>
            <Input
                placeholder="Email"
                value={props.email}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(newValue) => props.setEmail(newValue)}
            />
            <Input
                placeholder="Password"
                value={props.password}
                onChangeText={(newValue) => props.setPassword(newValue)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            {props.state.errorMessage ? (
                <Text>{props.state.errorMessage}</Text>
            ) : null}
            <Button
                title={props.title}
                onPress={() =>
                    props.action({
                        email: props.email,
                        password: props.password,
                    })
                }
            />
            <Spacer />
            <TouchableOpacity>
                <Text style={{ color: "blue" }}>{props.buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 200,
    },
});

export default AuthForm;
