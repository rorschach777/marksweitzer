"use client"

import {Spinner} from "@nextui-org/react";
import { useMsContext } from "../context/ms-context";
import { useEffect, useState } from "react";
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
    const {setupFilteredJob, jobTitle, isValidJob, sanityJobTitles } = useMsContext();
    const pathName = usePathname();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        // console.log("Step 1: - Loading Content - Job Title" + jobTitle)
        // console.log(sanityJobTitles)
        // setupFilteredJob(jobTitle, sanityJobTitles);
        setLoaded(true);
    },[jobTitle])
    console.log("Loading Content: " + isValidJob)
    return (
        <>
            { loaded || pathName === "/" ? props.children : loadingScreen()}
        </>
    );
}

export default LoadingContent;