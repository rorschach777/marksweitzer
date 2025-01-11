"use client";
import {  useEffect, useState, useRef, useReducer } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMsContext } from '../context/ms-context';
import {getJob} from '../utilities/job-logic';



const initialState = {
    step: 1,
    job: {},
    activeContent: null,
    removeHidden: false,
}

const profileReducer = (state, action) => {
    if (action.type === "REMOVE_HIDDEN"){
        return {
            ...state,
            removeHidden: true,
        }
    }
    if (action.type === "LOAD"){
        return {
            ...state,
            job: action.payload.job,
            removeHidden: false,
            activeContent: action.payload.activeContent
        }
    }
    if(action.type === "FORWARDS"){
       return {
        ...state, 
        step: action.payload.step,
        activeContent: action.payload.activeContent,
        removeHidden: false,
  
       }
    }
    if(action.type === "BACKWARDS"){
        return {
            ...state, 
            step: action.payload.step,
            activeContent: action.payload.activeContent,
            removeHidden: false
           }
    }

}


const ProfileContent = (  ) => {
    const [loaded, setLoaded] = useState(false);
    const container = useRef();
    const [profileState, profileDispatch] = useReducer(profileReducer, initialState);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    const { jobTitle } = useMsContext();

    // useEffect(()=>{
    //     const filteredJob = getJob(jobTitle);
    //     console.log("Job Title - Use Effect: ", `${jobTitle}` )
    //     console.log("Filtered Job")
    //     console.log(filteredJob)
    //     setJob(filteredJob);
    // },[jobTitle]);

    const getActiveContent = (stepNumber) => {
        let output = profileState.activeContent;
        switch(stepNumber){
            case 1 : 
                output = profileState.job.sectionOne;
                break;
            case 2 : 
                output = profileState.job.sectionTwo;
                break;
            case 3 : 
                output = profileState.job.sectionThree;
                break;
            case 4 : 
                output = profileState.job.sectionFour;
                break;
    
        }

        return output; 
    }

    useEffect(()=>{
    
        const filteredJob = getJob(jobTitle);
        profileDispatch({type: "LOAD", payload: {job : filteredJob, activeContent: filteredJob.sectionOne }});
        setLoaded(true);
    }, []);

    useEffect(()=>{
        
    },[profileState.activeContent])




    useGSAP(()=>{
       
        if(loaded === false){
            return;
        }

        const movements = {
            incrementOne: 2.5,
            incrementTwo : 6,
            incrementThree : 4.5,
            incrementFour: 20

        }

        const nextButton = document.getElementById("next-button");
        const backButton = document.getElementById("back-button");
        const profileHeadline = document.getElementById("profile-content-headline");
 
        const tl = gsap.timeline({paused: true, defaults: {duration: .05}});
        const heroText = document.getElementById("hero");
    
        const counterContainer = document.getElementById("counter-container");
        const contentOne = document.getElementById("description-text-section-one");
      const handleNumber = (number, direction ) => {
            return direction === "forwards" ? number * -1 : number;
        }
    
        const clickHandler = ( direction ) => {
         
            tl.from(contentOne, { x : '-5rem', opacity:0}).to(contentOne, { x : '0', opacity: 1});
            tl.to(heroText, {top: `+=${handleNumber(movements.incrementFour, direction)}rem`, ease: "circ", duration: .5, opacity: .2, filter: "blur(2rem)", stagger: .5, }).to(heroText, {filter:  'blur(0px)', opacity: 1});
            tl.to(counterContainer, {y: `+=${handleNumber(movements.incrementThree, direction)}rem`,});
            tl.from(profileHeadline, { x : '-5rem', opacity:0}).to(profileHeadline, { x : '0', opacity: 1});
            tl.play();
        }

        nextButton.addEventListener("click", ()=>{
            clickHandler("forwards");
            const updatedStep = ( profileState.step >= 1 && profileState.step < 4 ) ? profileState.step += 1 : profileState.step; 
            profileDispatch({type: "FORWARDS", payload: {step: updatedStep, activeContent : getActiveContent(updatedStep)}})
            profileDispatch({type: "REMOVE_HIDDEN"})
        });
       
        backButton.addEventListener("click", ()=>{
            clickHandler("reverse");
            const updatedStep = ( profileState.step >= 1 && profileState.step < 5 ) ? profileState.step -= 1 : profileState.step; 
            profileDispatch({type: "BACKWARDS", payload : {step: updatedStep, activeContent : getActiveContent(updatedStep)}})
            profileDispatch({type: "REMOVE_HIDDEN"})
        });
        console.log(profileState)
        
    }, { dependencies: [loaded], scope: container} );

    // useEffect(()=>{
    
    // }, [profileState.activeContent])

    // useGSAP(()=>{
    
    //     const offsets = {
    //         offset1: -150,
    //         offset2: -100,
    //         offset3: -200,
    //         offset4: -250,
    //         profileContent: -25,
    //         profileCallout: -75,
    //         calloutOffset: -50
    //     }
    //     const tl1 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#profile-content-1',
    //             start: '-10% center',
    //             end: '50px center',
    //             scrub: true,
    //             markers: false
    //         }
    //     })


    //     // tl1.to('#profile-callout-2', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 2})
    //     // tl1.to('#profile-callout-3', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 3})
    //     tl1.to('#top-title', {letterSpacing: '1rem', opacity: 0, filter: "blur(2.2rem)", y: 50});
    //     tl1.to('#profile-callout-1', {top : offsets.profileCallout, opacity: 1});
    //     tl1.to('#profile-content-1', {y: offsets.profileContent, opacity: 1})
 
    //     const tl2 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#profile-content-2',
    //             start: '-50% center',
    //             end: '10% center',
    //             scrub: true,
    //             markers: false
    //         }
    //     });
    //     // tl2.to('#profile-callout-4', {opacity: .03, y : 520, filter: 'blur(0px)', duration: 6})
    //     // tl2.to('#profile-callout-5', {opacity: .02, y : 600, filter: 'blur(0px)', duration: 1})
 

    //     tl2.to('#profile-callout-2', {top: offsets.profileCallout, opacity: 1});
    //     tl2.to('#profile-content-2', {y: offsets.profileContent, opacity: 1})

    //     // tl2.to('#profile-callout-6', {opacity: .02, y : 675, filter: 'blur(0px)', duration: 5})
    //     const tl3 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#profile-content-3',
    //             start: '-100% center',
    //             end: '-50% center',
    //             scrub: true,
    //             markers: false
    //         }
    //     });
    //     // tl3.to('#profile-callout-7', {opacity: 1, y : 1000, filter: 'blur(0px)', duration: 3})
    //     tl3.to('#profile-callout-3', {top: offsets.profileCallout, opacity: 1});
    //     tl3.to('#profile-content-3', {y: offsets.profileContent, opacity: 1});

    //     const tl4 = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: '#profile-content-4',
    //             start: '-300% center',
    //             end: '-250% center',
    //             scrub: true,
    //             markers: false
    //         }
    //     });
    //     // tl3.to('#profile-callout-7', {opacity: 1, y : 1000, filter: 'blur(0px)', duration: 3})
    //     tl4.to('#profile-callout-4', {top: offsets.profileCallout, opacity: 1});
    //     tl4.to('#profile-content-4', {y: offsets.profileContent, opacity: 1})



    // });

    return(
        <div className="profile" ref={container}  >
           <div className="profile-content" >
                <div className="profile-content-section">
                    <div className="hero"  id="hero" >
                        <span className={`hero-text`}>{profileState.activeContent !== null && profileState.job.mainMessage}</span>
                    </div>
                    <div className="profile-content-indicator">
                        <div className="profile-content-indicator-container">
                            <div id="counter-container" className="counter-container">
                                <span id="step-1">01</span>
                                <span id="step-2">02</span>
                                <span id="step-2">03</span>
                                <span id="step-2">04</span>
                            </div>
                       
                            <span className="total-steps">/ 04</span>
                        </div>
                    </div>
                    <div className="profile-content-headline" id="profile-content-headline">
                        {profileState.activeContent && (
                            <>
                                <span>{profileState.activeContent.hero.subheadline.top}</span>
                                <span>{profileState.activeContent.hero.subheadline.bottom}</span>
                            </>
                        )}
                       
                    </div>
                    <div className="progress-navigation">
                        <div className="progress-navigation-container">
                            <div  className={`progress-button ${profileState.step > 1 ? '' : 'u-hide'} progress-button-back` } id="back-button">&lt; Back<span>  </span></div>
                            <div className={`progress-button ${profileState.step < 4 ? '' : 'u-hide'} progress-button-next` } id="next-button">Next  &gt;<span> </span></div>
                        </div>
                    </div>
                </div>
                <div className="profile-content-section profile-content-description">
                    <div className="profile-content-description-title">
                        <span>{profileState.activeContent != null && profileState.activeContent.title}</span>
                    </div>
                    <div  className={`profile-content-description-text `}>
                        <div id="description-text-section-one" className={`description-text-section   description-text-section-one `}>
                            <span>{profileState.activeContent != null && profileState.activeContent.secondaryTitle}</span>
                            <p>
                            {profileState.activeContent != null && profileState.activeContent.content}
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}
export default ProfileContent;