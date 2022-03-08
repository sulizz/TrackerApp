import { LocationSubscriber } from "expo-location/build/LocationSubscribers";
import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch (action.type) {
        case "add_current_location":
            return { ...state, currentLocation: action.payload };
        default:
            return false;
    }
};

//action functions
const startRecording = (dispatch) => () => {};

const stopRecording = (dispatch) => () => {};

const addLocation = (dispatch) => (location) => {
    dispatch({ type: "add_current_location", payload: location });
};

export const { Context, Provider } = createDataContext(
    locationReducer,
    {
        startRecording,
        stopRecording,
        addLocation,
    },
    {
        recording: false,
        Location: [],
        currentLocation: null,
    }
);
