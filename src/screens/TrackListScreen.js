import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
    return (
        <View>
            <Text>TrackListScreen</Text>
            <Button
                title="Tack details"
                onPress={() => navigation.navigate("TrackDetails")}
            />
        </View>
    );
};
const styles = StyleSheet.create({});
export default TrackListScreen;
