import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native";
const AccountScreen = ({}) => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text>AccountScreen</Text>
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
export default AccountScreen;
