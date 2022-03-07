import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
const AccountScreen = ({}) => {
    const { signout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text>AccountScreen</Text>
            <Button title="Sign Out" onPress={() => signout()} />
        </View>
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
