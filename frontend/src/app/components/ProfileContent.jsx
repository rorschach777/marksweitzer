"use client";
import { useRef, useEffect} from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";




const ProfileContent = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    // const container = useRef(null);   


    useGSAP(()=>{

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: '.profile-content',
        //         start: 'top center',
        //         end: 'bottom center',
        //         scrub: true,
        //         markers: true
        //     }
        // });

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-1',
                start: '25% center',
                end: 'bottom center',
                scrub: true,
                markers: false
            }
        })
        tl1.to('#profile-callout-start', {opacity: 0, filter: 'blur(0px)', duration: 2})
        tl1.to('#profile-callout-1', {opacity: 1, y : 125, filter: 'blur(0px)', duration: 2})
        tl1.to('#profile-callout-2', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 2})
        tl1.to('#profile-callout-3', {opacity: .05, y : 175, filter: 'blur(0px)', duration: 3})
  
        tl1.to('#profile-content-1', {y: -150, opacity: 0})
        tl1.to('#profile-content-2', {y: 0, opacity: 1})
     
 
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-2',
                start: '10% center',
                end: 'bottom center',
                scrub: true,
                markers: false
            }
        });
        tl2.to('#profile-callout-4', {opacity: .03, y : 520, filter: 'blur(0px)', duration: 6})
        tl2.to('#profile-callout-5', {opacity: .02, y : 600, filter: 'blur(0px)', duration: 1})
 

        tl2.to('#profile-content-2', {y: -150, opacity: 0})
        tl2.to('#profile-content-3', {y: 0, opacity: 1})
        tl2.to('#profile-callout-6', {opacity: .02, y : 675, filter: 'blur(0px)', duration: 5})
        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-3',
                start: 'top center',
                end: 'bottom center',
                scrub: true,
                markers: false
            }
        });
        tl3.to('#profile-callout-7', {opacity: 1, y : 1000, filter: 'blur(0px)', duration: 3})
        tl3.to('#profile-content-3', {y: -450, opacity: 0})
        tl3.to('#profile-content-4', {y: 175, opacity: 1})

 
    });
    // useGSAP(()=>{

    //     const tl = gsap.timeline();
    //     tl.to('.char', { y: 0, stagger: .125, duration: 1, margin: 0 });
    // })


    return(
        <div className="profile"  >
            <div className="profile-content" >
      
                {/* <span className="profile-callout profile-callout-reg">Frontend Development</span>
                <span className="profile-callout profile-callout-2xl">React</span>
                <span className="profile-callout profile-callout-2xl">Next.js</span> */}
       
                <p id="profile-content-1" className="profile-content-p">
                    As a seasoned frontend developer with over a decade of experience, I am deeply passionate about creating seamless and visually engaging web experiences. My expertise lies in crafting responsive applications using modern frameworks such as React, Next.js, and Vue, where I focus on merging elegant design with functional precision. With a background in UI/UX design, I bring a keen eye for detail to every project, ensuring that user interfaces are not only visually appealing but also intuitive and accessible. I enjoy working with JavaScript to build dynamic and interactive features, and my adaptable skillset allows me to extend beyond the frontend to tackle backend tasks when needed.
                </p>
              
                <p id="profile-content-2" className="profile-content-p">
                    Throughout my career, I have thrived in roles that require both technical acumen and mentorship. As a Full Stack Instructor at Tech Elevator, I delivered comprehensive training on Java (Spring Boot), PostgreSQL, and Vue.js, equipping aspiring developers with the skills necessary to launch their careers. Mentoring students and guiding them through capstone projects was particularly fulfilling, as it allowed me to foster growth and share my industry insights. This collaborative approach has been a cornerstone of my work philosophy, whether mentoring junior developers or collaborating with cross-functional teams to deliver impactful solutions.
                </p>
            
                <p id="profile-content-3"  className="profile-content-p">
                    My professional journey has also included significant contributions to eCommerce and branding projects, where I’ve programmed complex order forms, integrated APIs, and optimized site performance to meet diverse client needs. Whether designing a consistent visual brand for software solutions or implementing data-driven improvements using tools like Google Tag Manager, I take pride in delivering results that align with both user and business objectives. Ultimately, I find joy in solving problems, learning new technologies, and creating digital experiences that leave a lasting impression. 
                </p>
 
                <p  id="profile-content-4" className="profile-content-p">
                    Let’s connect! If you’re interested in collaborating on a project or have a role in frontend development that aligns with my expertise, feel free to fill out the form below. I’m always happy to schedule a time to chat and explore opportunities to create outstanding digital experiences together.
                </p>
               
                <span id="profile-callout-start" className="profile-callout  ">Professional Profile</span>
                <span id="profile-callout-1" className="profile-callout  ">Seasoned Frontend Developer </span>
                <span  id="profile-callout-2" className="profile-callout ">React | Next.js | JavaScript</span>
                <span id="profile-callout-3" className="profile-callout ">UI|UX</span>
               {/* Second Set of Callouts */}
                <span id="profile-callout-4"  className="profile-callout ">Full Stack Development</span>
                <span id="profile-callout-5" className="profile-callout">Technical Acumen and Mentorship</span>
           
                <span  id="profile-callout-6"  className="profile-callout ">Impactful<br/> Solutions</span>
                <span  id="profile-callout-7"  className="profile-callout">Let's Connect</span>
            
            </div>
         
           
        </div>
    );
}
export default ProfileContent;