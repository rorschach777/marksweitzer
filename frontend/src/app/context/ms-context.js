"use client"

import { createContext, useContext} from 'react';
import { getJob, validJob } from '../utilities/job-logic';
import { useReducer } from 'react';

const initialState = {
    jobTitle : "",
    jobContent: {},
    isValidJob: false, 
    sanityJobTitles: []
}

const msContextReducer = (state , action ) => {

    if (action.type === "SETUP_JOB_TITLE"){
        return {
            ...state,
            jobTitle : action.payload.jobTitle,
            sanityJobTitles: action.payload.sanityJobTitles
        }
    }    
  
    if (action.type === "SETUP_FILTERED_JOB"){
        return {
            ...state,
            jobContent: action.payload.jobContent,
            isValidJob: action.payload.isValidJob
            
        }
    }
}



const MsContext = createContext();

export const MsContextProvider = ( props ) => {
    // const [jobTitle, setJobTitle] = useState("");
    // const [jobContent, setJobContent] = useState({});
    // const [isValidJob, setIsValid] = useState(false);
    // const [sanityJobTitles, setSanityJobTitles] = useState(null);

    const [msContextState, msContextDispatch] = useReducer(msContextReducer, initialState);

    const setJobTitle = (jobTitle, sanityJobData) => {
        msContextDispatch({type: "SETUP_JOB_TITLE", payload: {
            jobTitle: jobTitle,
            sanityJobTitles : sanityJobData
        }});
    }

    // const setupFilteredJob = (jt) => {
    //     const filteredJob = getJob(jt);
    //     const isValid = validJob(jt);
    //     setIsValid(isValid);
    //     setJobContent(filteredJob);
    // }

    const setupFilteredJob = (jt, resumeData, jobTitleData) => {

        const filteredJob = getJob(jt, resumeData);
        console.log("Filtered Job:");

        let isValidJob = false;
        console.log("setupFilteredJOb")
        console.log(filteredJob)
        console.log(jobTitleData);
        isValidJob = validJob(jt,jobTitleData);
        console.log("is Valid Job: " + isValidJob)
  
        // const isValid = true;
        msContextDispatch({type: "SETUP_FILTERED_JOB", payload: {
            filteredJob: filteredJob,
            isValidJob: isValidJob,

        }})

    }

    return (
        <MsContext.Provider value={{ 
        jobTitle : msContextState.jobTitle, 
        jobContent: msContextState.jobContent,
        isValidJob : msContextState.isValidJob,
        setJobTitle : setJobTitle, 
        setupFilteredJob: setupFilteredJob, 
        sanityJobTitles : msContextState.sanityJobTitles
        }}>
            {props.children}
        </MsContext.Provider>
    );
}


export const useMsContext = () => useContext(MsContext);
