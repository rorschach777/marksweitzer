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
    const { isValidJob,  } = useMsContext();
    const pathName = usePathname();
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(isValidJob){
            setLoaded(true);
        } 
    },[isValidJob])

    return (
        <>
            { loaded || pathName === "/" ? props.children : loadingScreen()}
        </>
    );
}

export default LoadingContent;