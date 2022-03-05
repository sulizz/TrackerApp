import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = (props) => {
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate(props.routeName)}
        >
            <Text style={{ color: "blue" }}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    );
};

export default withNavigation(NavLink);
