import { jobs } from '../data/profileContent';

export const getJob = ( jobTitle ) => {
    let output = jobs[0];
    if(jobTitle !== undefined){
        let filteredJob = jobs.filter(j=> j.cookieValue.toLowerCase() === jobTitle.toLowerCase());
        if(filteredJob.length > 0) {
            output =  filteredJob[0];
        }
    }
 
    return output;
}

export const validJob = (jobTitle) => {

    let output = false;
    const validCookieValues = jobs.map(j=>j.cookieValue);
    validCookieValues.forEach(t=>{
        if(t === jobTitle){
            output = true;
        }
    })
    return output; 
}
