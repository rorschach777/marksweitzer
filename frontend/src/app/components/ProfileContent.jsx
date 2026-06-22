"use client";
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";



const words = ["brands.", "campaigns.", "products.", "insights.", "results."];


const ProfileContent = () => {

    const container = useRef();


    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);


 



useGSAP(() => {
  const wordItems = gsap.utils.toArray(".profile-words li");

  gsap.set(".profile-panel", { yPercent: 120, scale: .5, opacity: 0});
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
    opacity: 5
  }, 0.9);

  tl.to(".profile-panel p", {
    opacity: 1,
    ease: "none",
  }, 0.9);

  tl.to(".profile", {
  yPercent: 0,
  scaleX: 1,
  borderRadius: "0rem",
  ease: "ease",
}, 0.8);
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
            From idea to real-world <span>impact.</span>
        </p>
         </main>
    </div>
    </section>
    );
}
export default ProfileContent;