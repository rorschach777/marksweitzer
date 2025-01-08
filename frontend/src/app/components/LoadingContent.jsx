"use client"

import {Spinner} from "@nextui-org/react";
import { useMsContext } from "../context/ms-context";
import { useEffect } from "react";


const loadingScreen = () => {
    return(
        <div className="loading-container">
            <div className="loading-message">
           
                <Spinner color="white"/>
                <span>Loading</span>
            </div>
        
        </div>

    );
}


const LoadingContent = (props) => {
    const {setupFilteredJob, jobTitle, isValidJob } = useMsContext();
    useEffect(()=>{
        setupFilteredJob(jobTitle);
    },[jobTitle])

    return (
        <>
            { isValidJob ? props.children : loadingScreen()}
        </>
    );
}

export default LoadingContent;