import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline, Circle } from "react-native-maps";
import { ActivityIndicator } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";

const MapComponent = () => {
    const {
        state: { currentLocation, locations },
    } = useContext(LocationContext);
    // console.log(currentLocation);
    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={50}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,1.0)"
            />
            <Polyline
                coordinates={locations.map((location) => location.coords)}
            />
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
});

export default MapComponent;
