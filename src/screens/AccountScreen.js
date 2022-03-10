import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native";
import { Feather } from "@expo/vector-icons";
const AccountScreen = ({}) => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Button title="Sign Out" onPress={() => signout()} />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

AccountScreen.navigationOptions = {
    title: "Settings",
    tabBarIcon: <Feather name="settings" size={24} color="black" />,
};
export default AccountScreen;
