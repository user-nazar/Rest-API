import React, { useEffect, useState } from "react";
import LoadingElement from "./Downloading";
import { CenterContainer, MessegeInfo } from "../styles/LoadPreviewStyles";

const LoadPrewiew = ({
                         name = "error",
                     }) => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        let myTimeout = setTimeout(() => {
            setLoad(true);
        }, 5000);
        console.log(load);
        return function cleanUp() {
            clearTimeout(myTimeout);
        };
    }, []);
    if (!load) {
        return <LoadingElement />;
    }
    return (
        <CenterContainer>
            <MessegeInfo>{name}</MessegeInfo>
        </CenterContainer>
    );
};

export default LoadPrewiew;
