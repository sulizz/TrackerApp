import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//create a instance and export it

const instance = axios.create({
    baseURL: "http://74ac-2600-1700-bf91-4000-7593-53cb-a918-274d.ngrok.io",
});

instance.interceptors.request.use(
    //called automatically anytime a request is made
    async (config) => {
        const token = await AsyncStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    //called if there is an error
    (err) => {
        return Promise.reject(err);
    }
);
export default instance;
