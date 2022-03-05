/*
    On App.js navigator function gets declared and only things inside of our App that can trigger navigation
    are components that are triggered by navigators. 
    How? 
    Every screen inside the switchNavigators receives a prop obj of navigation prop inside of it.
    That navigation prop triggers the navigation 
    Getting access to the prop outside the react component is challenging.
    The switch navigators are react component defination. It not a navigator instead it is a function or a class
    that can be used to create a switchnavigator
    When we render our App out of the createAppContainer(switchNavigator), the functions are created to trigger navigation
*/

import { NavigationActions } from "react-navigation";

//let lets the variable be reassigned
let navigator;

//function to get access to navigator
//nav === navigation obj that is comming from react navigation that will allow us to navigate to different screens
//assign nav to navigator.

export const setNavigator = (nav) => {
    navigator = nav;
};

//function that allows everything else which is a non-react component to trigger navigation
//routeName --> name of the route we want to navigate to
// params --> any parameters we want to route to the other route with
export const navigate = (routeName, params) => {
    //navigator provided by react-navigation has internal function similar to context
    //dipatching a action, react navigation changes its state and show a different screen
    navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: params,
        })
    );
};
