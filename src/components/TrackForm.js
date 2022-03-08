import React from "react";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";
function TrackForm() {
    return (
        <>
            <Spacer />
            <Input placeholder="Name your Track" />
            <Button title="RECORD" />
        </>
    );
}

export default TrackForm;
