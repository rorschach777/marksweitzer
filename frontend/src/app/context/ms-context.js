"use client"

import { createContext, useContext, useState} from 'react';



const MsContext = createContext();

export const MsContextProvider = ( props ) => {
    const [jobTitle, setJobTitle] = useState("X");

    return (
        <MsContext.Provider value={{ jobTitle : jobTitle, setJobTitle : setJobTitle}}>
            {props.children}
        </MsContext.Provider>
    );
}


export const useMsContext = () => useContext(MsContext);
