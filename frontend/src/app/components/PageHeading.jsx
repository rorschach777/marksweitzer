"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const PageHeading = ( props ) => {

    const tl = useRef(null);

    useEffect(()=>{
        tl.current = gsap.timeline({paused: true});
        tl.current.to('.page-title', { opacity: 1, duration: 5, filter: "blur(0.75rem)", stagger: .5, repeat: 2, yoyo: true}).to('.page-title', { filter: 'blur(0px)'});
        tl.current.play();
    },[]);
    return (
        <div className="ms-container">
            <h1 className="page-title-main">{props.title}</h1>
            <div className="ms-flex-container ms-heading">
                <div className="column">
                    <span className="page-title page-title-left">{props.title}</span>
                </div>
                <div className="column">
                    <span className="page-title page-title-right">{props.title}</span>
                </div>
                <div className="column"></div>
                <div className="column"></div>
            </div>
        </div>
    );
}
export default PageHeading;