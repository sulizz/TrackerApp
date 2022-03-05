import React, { useState } from "react";
//morning --> 4am - 12pm
//afternoon --> 12pm - 5pm
//evening --> 5pm to 10pm
//night --> 10pm --> 4am
const Greeting = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        setGreeting(greeting());
    }, []);

    const greeting = () => {
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

    return <>{greeting}</>;
};

export default Greeting;
