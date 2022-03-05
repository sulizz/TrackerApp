import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

//reducer that changes the state
const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            //if user signs up with email which gets error, then logs in successfully.
            //to remove the error msg we re-build our state obj so instead of ...state which copies data
            //errorMessage: "" which changes the error to empty string
            return { errorMessage: "", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage: "" };
        default:
            return state;
    }
};

//flow
//make request to sign up
// if sucess
//take jwt we get from api and store it on the device
//dispatch action to put token in state obj
//navigate user to mainflow
//if fail
//dispatch an action to update state with an error msg
//show error in state

//action function that calls reducer  to modify state

const signup = (dispatch) => {
    //inner function gets called inside our component.
    return async ({ email, password }) => {
        //make api request to sign up with that email and password
        //if we sign up, modify our state, and say that we are authenticated
        //if sign up fails, need error message
        try {
            const response = await trackerApi.post("/signup", {
                email,
                password,
            });
            await AsyncStorage.setItem("token", response.data.token); // #1save it in local storage
            dispatch({ type: "signin", payload: response.data.token }); // #2 dispatch the action
            console.log("navigating to mainflow");
            navigate("TrackList"); // #3 navigate user to new flow
        } catch (err) {
            dispatch({
                type: "add_error",
                payload: "Something went wrong here with error message",
            });
        }
    };
};

const signin = (dispatch) => {
    return async ({ email, password }) => {
        console.log(email, password, "received");
        //make api call
        try {
            const response = await trackerApi.post("/signin", {
                email: email,
                password: password,
            });
            //save data in local storage
            // await AsyncStorage.setItem("token", response.data.token);
            //dispatch
            dispatch({ type: "signin", payload: response.data.token });
            navigate("TrackList");
        } catch (err) {
            dispatch({
                type: "add_error",
                payload: "Username or Password Incorrect",
            });
        }
    };
};

const signout = (dispatch) => {
    return () => {
        //sign out
    };
};
//arrow functions
//const a = (b,c) => a + b //implicit return
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: "clear_error_message" });
};
//export provier and context
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup: signup, signin: signin, signout: signout, clearErrorMessage },
    { token: null, errorMessage: "" }
);
