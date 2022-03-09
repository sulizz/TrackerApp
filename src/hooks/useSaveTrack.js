import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";

//re usable hook that takes in a location and trackName from location context
// passes on the data to createtrack on TrackContext for user to save data in the backend
export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { locations, name },
    } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
    };

    return [saveTrack];
};
