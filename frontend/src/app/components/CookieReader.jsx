"use client";

import { getCookie, setCookie } from 'cookies-next';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { validJob } from '../utilities/job-logic';
import { useMsContext } from '../context/ms-context';
import { useRouter } from 'next/navigation'


const CookieReader = () => {
  const jobTitleParam = "jt";
  const [cookieLoaded, setCookieLoaded] = useState(false);
  const { setJobTitle }  = useMsContext();
  // const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamJobTitle = searchParams.get(jobTitleParam);


  //#region Support Methods. 
  const setCookieHandler = (existingCookie) => {

    let setValue = existingCookie === undefined ? searchParamJobTitle : existingCookie;
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 2);

    const options = {expires: expirationDate}
    setCookie(jobTitleParam, setValue, options );
  };

  const retrieveExistingCookie = () => {
    const myCookie = getCookie(jobTitleParam);
    return myCookie;
  }

  const validateSearchParam = () => {
    let output = false;
    if(searchParamJobTitle !== null){
      output = validJob(searchParamJobTitle);
    }
    return output;
  }

  const redirectBadRequest = () => {
    router.push("/")
  }

  const responseHandler = (receivedJobTitle) => {
    setJobTitle(receivedJobTitle);
    setCookieLoaded(true);
  }

  //#endregion

 
  // Check to see if cookie exists... 
  useEffect(()=>{
    // No cookie existing value exists -- set a new one based on search params. 
    const existingCookie = retrieveExistingCookie();
    let contextJobTitle = "";
    if (existingCookie === undefined){
      // Check to see if a prop obtained is valid? 
      if(validateSearchParam()){
        // if so set it. 
        contextJobTitle = searchParamJobTitle;
        setCookieHandler();
      } else {
        redirectBadRequest()
      }
    } 
    // If there was a cookie found then just use the one you have available. 
    else {
      setCookieHandler(existingCookie)
      contextJobTitle = existingCookie;
    }
    // loaded data accordingly 
    responseHandler(contextJobTitle);
  },[]);

  useEffect(()=>{
  },[cookieLoaded]);


  return (
    <>
    </>
  );
}

export default CookieReader;