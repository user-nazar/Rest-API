import React, { useEffect, useState } from "react";
import LoadingElement from "./ProcessOfLoading";
import { CenterContainer, MessegeInfo } from "../styles/ProcessOfLoadingStyles";

const ProcessOfLoading = ({
                         title = "Not Found",
                         description = "Please try again later",
                     }) => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        let myTimeout = setTimeout(() => {
            setLoad(true);
        }, 7000);
        return function cleanUp() {
            clearTimeout(myTimeout);
        };
    }, []);
    if (!load) {
        return <LoadingElement />;
    }
    return (
        <CenterContainer>
            <MessegeInfo>{title}</MessegeInfo>
            <MessegeInfo>{description}</MessegeInfo>
        </CenterContainer>
    );
};

export default ProcessOfLoading;