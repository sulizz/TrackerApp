import React, { useContext, useState } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
    const { state, signup } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthForm
            title="Sign Up"
            email={email}
            password={password}
            state={state}
            action={signup}
            setEmail={setEmail}
            setPassword={setPassword}
            navigation={navigation}
            screenName={"Signin"}
            buttonTitle="Already have an account? Sign in"
        />
    );
};

//doesnt show the header
SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};
export default SignupScreen;
