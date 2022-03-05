import React, { useContext, useState } from "react";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = ({ navigation }) => {
    const { state, signin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthForm
            title="Sign In"
            email={email}
            password={password}
            state={state}
            action={signin}
            setEmail={setEmail}
            setPassword={setPassword}
            navigation={navigation}
            screenName={"Signup"}
            buttonTitle="Don't have a account yet? Sign Up"
        />
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SigninScreen;
