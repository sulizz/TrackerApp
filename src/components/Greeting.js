import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
//morning --> 4am - 12pm
//afternoon --> 12pm - 5pm
//evening --> 5pm to 10pm
//night --> 10pm --> 4am
const Greeting = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setGreeting(greetings());
    }, []);

    const greetings = () => {
        const date = parseInt(new Date().getHours());
        let message = "";
        if (date < 12) {
            message = "Good Morning";
        } else if (date >= 12 && date < 17) {
            message = "Good Afternoon";
        } else if (date >= 17 && date < 24) {
            message = "Good Evening";
        }

        return message;
    };

    return <Text>{greeting}</Text>;
};

export default Greeting;
