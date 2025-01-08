'use client'
 
import { useSearchParams, usePathname } from 'next/navigation';
import { useReducer, useEffect, useContext } from 'react';
import { useMsContext } from '../context/ms-context';
import { useRouter } from 'next/navigation'
import {validJob} from '../utilities/job-logic';
const SearchParams =  (props) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { setJobTitle }  = useMsContext();
  
  const router = useRouter();
  // 2. Get query parameter. 
  const searchParamJobTitle=  searchParams.get('jt');
 

  // No cookie value or query param
  const handleRequest = async () => {
    if(props.cookieJobTitle === "" && pathName !== "/"){
      router.push("/");
    }
    if (validJob(props.cookieJobTitle) === false && pathName !== "/"){
      router.push("/")
    } 
  }

  useEffect(()=>{
    // 3.  Check if job title exists
    // const {jobTitleState, dispatchJobTitle} = useMsContext();

    // 4. if it does exist, and not equal to what is stored in cookie, not equal to default... Then update it. 
    if(searchParamJobTitle !== null && (searchParamJobTitle !== props.cookieJobTitle)){

      if( validJob(searchParamJobTitle)) {
        fetch("/api/title", { method: "POST", body :  JSON.stringify( { jobTitle: searchParamJobTitle} )});
        setJobTitle(searchParamJobTitle);
      } else {
        handleRequest();
      }
    
    } 
    if (searchParamJobTitle === null && props.cookieJobTitle) {
      setJobTitle(props.cookieJobTitle)
    }
    if( searchParamJobTitle === null && props.cookieJobTitle === ""){
      handleRequest()
    }
    if(props.cookieJobTitle){
      handleRequest()
    }

  },[])
  return <>{ props.children }</>;
}
export default SearchParams;