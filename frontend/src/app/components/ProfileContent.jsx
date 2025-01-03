"use client";
import { useRef, useEffect, useState} from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMsContext } from '../context/ms-context';
import { jobs } from '../data/profileContent';
import { Spinner } from '@nextui-org/react';

const getJob = ( jobTitle ) => {
    let output = jobs[0];
    console.log("job title - Get Job :" + jobTitle)
    let filteredJob = jobs.filter(j=> j.cookieValue.toLowerCase() === jobTitle.toLowerCase());
    console.log("Filtered Job")
    console.log(filteredJob)
    if(filteredJob.length > 0) {
        output =  filteredJob[0];
        console.log("Content Updated: ")
        console.log(output)
    }
    return output;
}

const ProfileContent = ( props ) => {
    const [loaded, setLoaded] = useState(false);
    const [job, setJob] = useState({});

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    const { jobTitle } = useMsContext();

    useEffect(()=>{
        const filteredJob = getJob(jobTitle);
        console.log("Job Title - Use Effect: ", `${jobTitle}` )
        console.log("Filtered Job")
        console.log(filteredJob)
        setJob(filteredJob);
    },[jobTitle]);

    useEffect(()=>{
        
        setLoaded(true);
    }, [])
    
    
    useEffect(()=>{

    
    

    },[loaded])



    useGSAP(()=>{
    
        const offsets = {
            offset1: -150,
            offset2: -100,
            offset3: -200,
            offset4: -250,
            profileContent: -25,
            profileCallout: -75,
            calloutOffset: -50
        }
        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-1',
                start: '-10% center',
                end: '50px center',
                scrub: true,
                markers: true
            }
        })


        // tl1.to('#profile-callout-2', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 2})
        // tl1.to('#profile-callout-3', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 3})
        tl1.to('#top-title', {letterSpacing: '1rem', opacity: 0, filter: "blur(2.2rem)", y: 50});
        tl1.to('#profile-callout-1', {top : offsets.profileCallout, opacity: 1});
        tl1.to('#profile-content-1', {y: offsets.profileContent, opacity: 1})
 
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-2',
                start: '-50% center',
                end: '10% center',
                scrub: true,
                markers: true
            }
        });
        // tl2.to('#profile-callout-4', {opacity: .03, y : 520, filter: 'blur(0px)', duration: 6})
        // tl2.to('#profile-callout-5', {opacity: .02, y : 600, filter: 'blur(0px)', duration: 1})
 

        tl2.to('#profile-callout-2', {top: offsets.profileCallout, opacity: 1});
        tl2.to('#profile-content-2', {y: offsets.profileContent, opacity: 1})

        // tl2.to('#profile-callout-6', {opacity: .02, y : 675, filter: 'blur(0px)', duration: 5})
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-3',
                start: '-100% center',
                end: '-50% center',
                scrub: true,
                markers: true
            }
        });
        // tl3.to('#profile-callout-7', {opacity: 1, y : 1000, filter: 'blur(0px)', duration: 3})
        tl3.to('#profile-callout-3', {top: offsets.profileCallout, opacity: 1});
        tl3.to('#profile-content-3', {y: offsets.profileContent, opacity: 1});

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-4',
                start: '-300% center',
                end: '-250% center',
                scrub: true,
                markers: true
            }
        });
        // tl3.to('#profile-callout-7', {opacity: 1, y : 1000, filter: 'blur(0px)', duration: 3})
        tl4.to('#profile-callout-4', {top: offsets.profileCallout, opacity: 1});
        tl4.to('#profile-content-4', {y: offsets.profileContent, opacity: 1})



    });

    return(
        <div className="profile"  >
           <div className="profile-content" >
        
                 <span id="top-title" className="top-title">Professional Profile </span>
                  <div className="profile-content-section">
                      <span id="profile-callout-1" className="profile-callout" > {loaded && job.sectionOne.title}</span>
                      <p id="profile-content-1" className="profile-content-p">
                         {loaded &&  job.sectionOne.content}
                      </p>
                  </div>
                  <div className="profile-content-section">
                      <span id="profile-callout-2"  className="profile-callout" >{loaded && job.sectionTwo.title}</span>
                      <p id="profile-content-2" className="profile-content-p">
                        {loaded &&  job.sectionTwo.content}
                      </p>
                  </div>
                  <div className="profile-content-section">
                      <span  id="profile-callout-3"  className="profile-callout" >{loaded && job.sectionThree.title}</span>
                      <p id="profile-content-3"  className="profile-content-p">
                         {loaded &&  job.sectionThree.content}
                      </p>
                  </div>
                  <div className="profile-content-section">
                      <span id="profile-callout-4"  className="profile-callout" >{loaded && job.sectionFour.title}</span>
                      <p  id="profile-content-4" className="profile-content-p">
                         {loaded && job.sectionFour.content}
                      </p>
                  </div>
              
              </div>
                
      
           
      
        </div>
    );
}
export default ProfileContent;