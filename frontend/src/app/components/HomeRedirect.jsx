"use client"
import {  usePathname } from "next/navigation";
import { useMsContext } from "../context/ms-context";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";


const HomeRedirect = (props) => {

    const {jobTitle} = useMsContext();
    const pathName = usePathname();
    const router = useRouter();
    useEffect(()=>{
        console.log("job title:  " + jobTitle)
        if(jobTitle === "" && pathName !== "/"){
            console.log("redirect");
            router.push("/")
        } 
    },[jobTitle])
    return props.children;
}
export default HomeRedirect;