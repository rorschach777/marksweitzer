'use client'
 
import { useSearchParams } from 'next/navigation';
import { useReducer, useEffect, useContext } from 'react';
import { useMsContext } from '../context/ms-context';






// interface IPayload {
//   jobTitle : string
// }

// interface IAction {
//   type: string,
//   payload: IPayload
// }


// interface IinitialState {
//   jobTitle : string
// }
// const initialState  = {
//   jobTitle : ""
// } 



// const jobTitleReducer = (state : IinitialState, action : IAction) => {
//   if(action.type === "UPDATE_JOB"){
//     return {
//       ...state,
//       jobTitle: action.payload.jobTitle
//     }
//   };
//   return state;
// }



const SearchParams =  (props) => {
  const searchParams = useSearchParams();
  const { setJobTitle }  = useMsContext();

  console.log(searchParams)
  // 2. Get query parameter. 
  const searchParamJobTitle=  searchParams.get('jt');
  console.log(searchParamJobTitle)
 
  useEffect(()=>{
    // 3.  Check if job title exists
    // const {jobTitleState, dispatchJobTitle} = useMsContext();
    console.log(`Searched params: ${searchParamJobTitle} ${props.cookieJobTitle}`)
    // 4. if it does exist, and not equal to what is stored in cookie, not equal to default... Then update it. 
    if(searchParamJobTitle !== null && (searchParamJobTitle !== props.cookieJobTitle)){
      fetch("/api/title", { method: "POST", body :  JSON.stringify( { jobTitle: searchParamJobTitle} )});
      setJobTitle(searchParamJobTitle);
    } 
    else {
      setJobTitle(props.cookieJobTitle)
    }

  },[])
  return <>{ props.children }</>;
}
export default SearchParams;