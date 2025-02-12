// import { jobTitles } from '../data/jobTitleAbreviations';
// import { jobs } from '../data/profileContent';
import {resumes} from '../data/resume';
import { IJobTitleObj } from '../interfaces/IJobTitleObj';

interface IResume {
    title: string, 
    jobTitle: {
        cookieValue : string
    },
    experience : {
        _id: string, 
        company: string, 
        yearStart: string, 
        yearEnd: string, 
        displayYears: string, 
        duties : string[]
    },
    skillsDisplayName: string, 
    skills: string
}


// import { ICookieJobTile } from '../interfaces/ICookieJobTile';

export const getJob = ( jobTitle : string, resumeData : IResume[] ) : IResume => {
    let output : IResume = resumeData[0];
    if(jobTitle !== undefined){
        let filteredJob = resumeData.filter(j=> j.jobTitle.cookieValue.toLowerCase() === jobTitle.toLowerCase());
        if(filteredJob.length > 0) {
            output =  filteredJob[0];
        }
    }
 
    return output;
}

export const validJob = (jobTitle : string, sanityJobTitles : IJobTitleObj[]) => {
    let output = false;
    if(sanityJobTitles.length > 0){
        sanityJobTitles.forEach(dataObj=>{
            if(dataObj.cookieValue === jobTitle){
                output = true;
            }
        })
    }
 
    return output; 
}


/** This is gets the correct resume for the page.  */
export const getApplicableResume = (jobTitle :string) => {
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
export const filterResumeContent = (sliderIndex : number, resume : any) => {
    // if cookie has been set not defaulted
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
