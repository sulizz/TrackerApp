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
    //inner function gets called inside our component
    return () => {};
};
//export provier and context
export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);
