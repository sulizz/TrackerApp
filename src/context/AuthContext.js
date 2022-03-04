import { RecyclerViewBackedScrollViewComponent } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

//reducer that changes the state
const authReducer = (state, action) => {
    switch (action.type) {
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
            console.log(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        //try to sign in
        //handle success by updating state
        //error
    };
};

const signout = (dispatch) => {
    return () => {
        //sign out
    };
};
//export provier and context
export const { Provider, Context } = createDataContext(
    authReducer,
    { signup: signup, signin: signin, signout: signout },
    { isSignedIn: false }
);
