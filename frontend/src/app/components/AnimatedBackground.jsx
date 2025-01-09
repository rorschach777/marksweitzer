"use client"

import { useEffect } from "react";
import gsap from "gsap";
const AnimatedBackground = () => {
    useEffect(()=>{
        const addArrow = () => {
            const div = document.createElement('div');
            div.className = 'arrow';
            div.innerHTML += '<svg height="10" width="10" xmlns="http://www.w3.org/2000/svg"><circle r="5" cx="5" cy="5" fill="#333" /></svg>'
            document.getElementById("main-container").appendChild(div);
        
        }
        
        for (let i = 0; i < 250; i++) {
            addArrow();
        }
        const cursor = document.getElementById('cursor');
        const arrows = document.getElementsByClassName('arrow');
        
        const followCursor = (e) => {
        
            const x = e.type === "touchmove" ? e.touches[0].clientX : e.x;
            const y = e.type === "touchmove" ? e.touches[0].clientY : e.y;
        
            gsap.set(cursor, {
                x: x - 15,
                y: y - 15
            })
        
            for (const arrow of arrows) {
        
                const rect = arrow.getBoundingClientRect();
        
                const a = x - (rect.x + rect.width / 2);
                const b = y - (rect.y + rect.height / 2);
                const c = Math.sqrt((a * a) + (b * b));
        
                const angle = Math.atan2(b, a) - Math.PI / 4;
                gsap.to(arrow, {
                  duration: 0.01,
                  rotation: angle + "_rad"
                });
            }
        }
        
        window.addEventListener('touchmove', followCursor);
        window.addEventListener('mousemove', followCursor);
    },[])
    
    return (
        <>
            <div id="cursor"></div>
            <div id="main-container"></div>
        </>
    );
}
export default AnimatedBackground;