import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../navigationRef";
//re usable hook that takes in a location and trackName from location context
// passes on the data to createtrack on TrackContext for user to save data in the backend
export default () => {
    const { createTrack } = useContext(TrackContext);
    const {
        state: { locations, name },
        resetLocation,
    } = useContext(LocationContext);

    const saveTrack = () => {
        createTrack(name, locations);
        resetLocation();
        navigate("TrackList");
    };

    return [saveTrack];
};
