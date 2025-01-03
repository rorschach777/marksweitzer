"use client"

import { createContext, useContext, useState} from 'react';
import { getJob, validJob } from '../utilities/job-logic';

const MsContext = createContext();

export const MsContextProvider = ( props ) => {
    const [jobTitle, setJobTitle] = useState("");
    const [jobContent, setJobContent] = useState({});
    const [isValidJob, setIsValid] = useState(false);

    const setupFilteredJob = (jt) => {
 
        const filteredJob = getJob(jt);
        const isValid = validJob(jt);
        setIsValid(isValid);
        setJobContent(filteredJob);
    }

    return (
        <MsContext.Provider value={{ 
        jobTitle : jobTitle, 
        setJobTitle : setJobTitle, 
        setupFilteredJob: setupFilteredJob,
        jobContent: jobContent,
        isValidJob : isValidJob
        }}>
            {props.children}
        </MsContext.Provider>
    );
}


export const useMsContext = () => useContext(MsContext);
