import React, { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={styles.container}>
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
            {props.state.errorMessage ? (
                <Text>{props.state.errorMessage}</Text>
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
            <TouchableOpacity
                onPress={() => props.navigation.navigate(props.screenName)}
            >
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
