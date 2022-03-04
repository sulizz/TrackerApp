import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        //dispatch is a function that we can call with action obj --> after react will take action obj and send to reducer
        const [state, dispatch] = useReducer(reducer, defaultValue);
        const boundActions = {};
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }
        return (
            //actual value that gets shared with components --> childrens
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
        );
    };
    //provider is the component that is going to make our data available to all our component
    //context is the context obj we are going to use to get access to the data from child component
    return { Context: Context, Provider };
};
