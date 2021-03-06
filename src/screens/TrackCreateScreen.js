// import "../_mockLocation";
import React, { useEffect, useContext, useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    const callback = useCallback(
        (location) => {
            addLocation(location, state.recording);
        },
        [state.recording]
    );

    const [error] = useLocation(isFocused || state.recording, callback);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <MapComponent />
            <TrackForm />
            {error ? <Text>Please Enable Location Services</Text> : null}
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: "Add Track",
    tabBarIcon: (
        <MaterialCommunityIcons
            name="map-marker-plus-outline"
            size={24}
            color="black"
        />
    ),
};

const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
