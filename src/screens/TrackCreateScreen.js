// import "../_mockLocation";
import React, { useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapComponent from "../components/MapComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import { withNavigationFocus } from "react-navigation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);
    const [error] = useLocation(isFocused, addLocation);

    return (
        <SafeAreaView forceInset={{ top: "always" }}>
            <Text h3>Create a Track</Text>
            <MapComponent />
            <TrackForm />
            {error ? <Text>Please Enable Location Services</Text> : null}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({});
export default withNavigationFocus(TrackCreateScreen);
