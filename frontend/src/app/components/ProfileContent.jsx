"use client";
import {  useEffect, useState, useRef, useReducer } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMsContext } from '../context/ms-context';


const words = ["websites.", "brands.", "campaigns.", "products.", "insights.", "teams.", "results."];

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

const ProfileContent = (props) => {
    const [loaded, setLoaded] = useState(false);
    const container = useRef();
    const [profileState, profileDispatch] = useReducer(profileReducer, initialState);

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    const { jobTitle } = useMsContext();

 
    const getActiveContent = (stepNumber) => {
        let output = profileState.activeContent;
        switch(stepNumber){
            case 1 : 
                output = profileState.job.sections[0];
                break;
            case 2 : 
                output = profileState.job.sections[1];
                break;
            case 3 : 
                output = profileState.job.sections[2];
                break;
            case 4 : 
                output = profileState.job.sections[3];
                break;
    
        }

        return output; 
    }

    useEffect(()=>{
        
    },[profileState.activeContent])


useGSAP(() => {
  const wordItems = gsap.utils.toArray(".profile-words li");

  gsap.set(".profile-panel", { yPercent: 100, scale: .8});
  gsap.set(".profile-panel p", { opacity: 0 });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".profile",
      start: "top top",
      end: "bottom bottom",
      scrub: true

    },
  });

  tl.to(".profile-panel", {
    yPercent: 0,
    scale: 1,
    ease: "none",
  }, 0.65);

  tl.to(".profile-panel p", {
    opacity: 1,
    ease: "none",
  }, 0.8);

  tl.to(".profile", {
  yPercent: 0,
  scaleX: 1,
  borderRadius: "0rem",
  ease: "ease",
}, 0.65);
ScrollTrigger.create({
  trigger: ".profile",
  start: "top top",
  end: "bottom bottom",

  onUpdate: (self) => {
    console.log(self.progress);
  }
});
  ScrollTrigger.create({
    trigger: ".profile",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
    onUpdate: (self) => {
      const activeIndex = Math.min(
        wordItems.length - 1,
        Math.floor(self.progress * wordItems.length)
      );

      wordItems.forEach((word, i) => {
        word.classList.toggle("active", i === activeIndex);
      });
    },
  });
  
}, { scope: container });

    return(
    <section className="profile" ref={container}>
    <div className="profile-sticky">
        <div className="profile-words">
        <h1>Lets build&nbsp;</h1>
        <ul>
            {words.map((word, i) => (
            <li key={word} className={i === 0 ? "active" : ""}>
                {word}
            </li>
            ))}
        </ul>
        </div>

        <main className="profile-panel">
        <p>
            From an idea to real-world <span>impact.</span>
        </p>
         </main>
    </div>
    </section>
    );
}
export default ProfileContent;