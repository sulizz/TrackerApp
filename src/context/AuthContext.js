import { RecyclerViewBackedScrollViewComponent } from "react-native";
import createDataContext from "./createDataContext";

//reducer that changes the state
const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//action function that calls reducer  to modify state
const signup = (dispatch) => {
    //inner function gets called inside our component.
    return ({ email, password }) => {
        //make api request to sign up with that email and password
        //if we sign up, modify our state, and say that we are authenticated
        //if sign up fails, need error message
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
    {},
    { isSignedIn: false }
);
