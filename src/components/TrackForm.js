import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
// import useSaveTrack from "../hooks/useSaveTrack";

function TrackForm() {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName,
    } = useContext(LocationContext);

    // console.log(locations.length);

    return (
        <>
            <Spacer />
            <Input
                placeholder="Name your Track"
                value={name}
                onChangeText={(newVal) => changeName(newVal)}
            />
            {recording ? (
                <Button
                    title="STOP RECORDING"
                    onPress={stopRecording}
                    buttonStyle={{
                        backgroundColor: "rgba(199, 43, 98, 1)",
                        borderColor: "transparent",
                        borderWidth: 0,
                    }}
                />
            ) : (
                <Button title="RECORD" onPress={startRecording} />
            )}
            <Spacer />
            {!recording && locations.length ? (
                <Button title="Save Recording" />
            ) : null}
        </>
    );
}

export default TrackForm;
