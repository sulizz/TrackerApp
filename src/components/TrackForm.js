import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

function TrackForm() {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        ChangeName,
    } = useContext(LocationContext);

    console.log(locations.length);

    return (
        <>
            <Spacer />
            <Input
                placeholder="Name your Track"
                value={name}
                onChaneText={(newVal) => ChangeName(newVal)}
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
        </>
    );
}

export default TrackForm;
