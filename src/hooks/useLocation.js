import { useState, useEffect } from "react";
import {
    Accuracy,
    requestForegroundPermissionsAsync,
    watchPositionAsync,
} from "expo-location";

export default (shouldTrack, callback) => {
    const [error, setError] = useState(null);

    const startWatching = async () => {
        let subscriber;
        try {
            await requestForegroundPermissionsAsync();
            subscriber = await watchPositionAsync(
                {
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                },
                callback
            );
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => {
        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber(null);
        }

        return () => {
            if (subscriber) {
                subscriber.remove();
            }
        };
    }, [shouldTrack, callback]);

    return [error];
};
