import React, { useEffect, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const Loading = () => {
    const { tryLocalSignin } = useContext(AuthContext);

    useEffect(() => {
        tryLocalSignin();
    }, []);
    return null;
};

export default Loading;
