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
                start: '-10% center',
                end: '20% center',
                scrub: true,
                markers: true
            }
        })
        tl1.to('#profile-content-1', {y: -150, opacity: 0})
        tl1.to('#profile-content-2', {y: -400, opacity: 1})
 
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-2',
                start: '-170% center',
                end: '-130% center',
                scrub: true,
                markers: true
            }
        })
        tl2.to('#profile-content-2', {y: -550, opacity: 0})
        tl2.to('#profile-content-3', {y: -700, opacity: 1})

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#profile-content-3',
                start: '-350% center',
                end: '-300% center',
                scrub: true,
                markers: true
            }
        })
        tl3.to('#profile-content-3', {y: -1850, opacity: 0})
        tl3.to('#profile-content-4', {y: -1170, opacity: 1})
        
 
    });
    // useGSAP(()=>{

    //     const tl = gsap.timeline();
    //     tl.to('.char', { y: 0, stagger: .125, duration: 1, margin: 0 });
    // })


    return(
        <div className="profile"  >
            <div className="profile-content" >
                <span className="profile-callout profile-callout-reg">
                    <span className="char">O</span>
                    <span className="char">v</span>
                    <span className="char">e</span>
                    <span className="char char-space">r </span>
                    <span className="char char-space">a </span>
                    <span className="char">D</span>
                    <span className="char">e</span>
                    <span className="char">c</span>
                    <span className="char">a</span>
                    <span className="char">d</span>
                    <span className="char char-space">e </span>
                    <span className="char">o</span>
                    <span className="char char-space">f </span>
                    <span className="char">E</span>
                    <span className="char">x</span>
                    <span className="char">p</span>
                    <span className="char">e</span>
                    <span className="char">r</span>
                    <span className="char">i</span>
                    <span className="char">e</span>
                    <span className="char">n</span>
                    <span className="char">c</span>
                    <span className="char">e</span>
                </span>
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

                <span className="profile-callout profile-callout-reg">React</span>
                <span className="profile-callout profile-callout-reg">Vue.js</span>
                <span className="profile-callout profile-callout-2xl">E-Commerce</span>
                <span className="profile-callout profile-callout-3xl">UI|UX</span>
            </div>
         
           
        </div>
    );
}
export default ProfileContent;