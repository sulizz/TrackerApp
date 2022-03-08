import React from "react";
//createAppContainer --> takes in a navigator obj and creates a component out of it
//createSwitchNavigator
//createStackNavigator
// createBottomTabNavigator
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import Loading from "./src/screens/Loading";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { setNavigator } from "./src/navigationRef";

//top level navigation createSwitchNavigator which goes between or login flow or main flow
const switchNavigator = createSwitchNavigator({
    //another grouping of screens, (another navigator)
    //createStackNavigator is a sub navigator
    Loading: Loading,
    loginFlow: createStackNavigator(
        {
            Signup: SignupScreen,
            Signin: SigninScreen,
        },
        {
            defaultNavigationOptions: {
                title: "",
            },
            // headerMode: "none",
            // navigationOptions: {
            //     headerVisible: false,
            // },
        }
    ),

    mainFlow: createBottomTabNavigator({
        trackListFlow: createStackNavigator({
            TrackList: TrackListScreen,
            TrackDetails: TrackDetailsScreen,
        }),

        TrackCreate: TrackCreateScreen,
        Account: AccountScreen,
    }),
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <LocationProvider>
            <AuthProvider>
                <App
                    ref={(navigator) => {
                        setNavigator(navigator);
                    }}
                />
            </AuthProvider>
        </LocationProvider>
    );
};

//ref={(nav) => {setNavigator(navigator)}};
//App component is created entirely by react navigation
//ref receives a arrow function which accepts a argument which is a navigator
// ref is a function that gets called with the obj that allows us to navigate around.
