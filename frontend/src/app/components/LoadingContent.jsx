"use client"

import {Spinner} from "@nextui-org/react";
import { useMsContext } from "../context/ms-context";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

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
    const pathName = usePathname();
    useEffect(()=>{
        setupFilteredJob(jobTitle);
    },[setupFilteredJob, jobTitle])

    return (
        <>
            { isValidJob || pathName === "/" ? props.children : loadingScreen()}
        </>
    );
}

export default LoadingContent;