import React, { useContext, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackerContext } from "../context/TrackContext";
import { navigate } from "../navigationRef";

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackerContext);

    // useEffect(() => {
    //     fetchTracks();
    // }, []);

    //anytime we navigate to this page we need to fetch the data
    // console.log(state);
    return (
        <View>
            <NavigationEvents onWillFocus={() => fetchTracks()} />
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("TrackDetails", {
                                    _id: item._id,
                                })
                            }
                        >
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}
            />
            <Button
                title="Tack details"
                onPress={() => navigation.navigate("TrackDetails")}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        title: "Your Tracks",
    };
};

const styles = StyleSheet.create({});
export default TrackListScreen;
