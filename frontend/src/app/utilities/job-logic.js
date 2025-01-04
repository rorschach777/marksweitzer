import { jobTitles } from '../data/jobTitleAbreviations';
import { jobs } from '../data/profileContent';
import {resumes} from '../data/resume';

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
    const validCookieValues = jobTitles;
    validCookieValues.forEach(t=>{
        if(t === jobTitle){
            output = true;
        }
    })
    return output; 
}


/** This is gets the correct resume for the page.  */
export const getApplicableResume = (jobTitle) => {
    const copyOfResumes = resumes;
    const frontendResume = copyOfResumes[0];
  
    let output = frontendResume; 
    let filteredResume = copyOfResumes.filter(r=> r.cookieValue === jobTitle)[0];
    if (filteredResume !== null){
        output = filteredResume;
    }
    return output;
}


/** This filters the actual jobs within a resume based on the slider index or the year */
export const filterResumeContent = (sliderIndex, resume) => {
    // if cookie has been set not defaulted
    console.log(resume)
    let output = null;
    
    if(resume != null) {
        output = resume.experience.filter( j => {
            let matchedByYear =  (sliderIndex >= j.yearStart && sliderIndex <= j.yearEnd) ? true : false;
            if(matchedByYear){
                return j;
            }
        });
    }

  
    return output;
}
