"use client";
import { useEffect, useState } from 'react';
import {Link} from '@nextui-org/link';



import gsap from "gsap";
import { useGSAP } from '@gsap/react';




const FlexSquare = ( props ) => {
    const [croppedContentIndex, setCroppedContentIndex] = useState(0);
    gsap.registerPlugin(useGSAP);
    
    // if(props.croppedContent === false){
    //     useGSAP(()=>{
    //         const tl = gsap.timeline({paused: true, defaults: {duration: .05}});
    //         const container = document.querySelector(`#flex-square-${props.label}`);
    //         console.log(container.attributes('data-before'))
    //         container.addEventListener("mouseover", ()=>{
    
    //             tl.to(container, {zIndex: 99});
    //             tl.to(container, {clipPath: 'clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'})
    //         })
          
    //     });
    
    // }



    useEffect(()=>{
        let increment =  croppedContentIndex;
        if(props.croppedContent){
            setTimeout(()=>{
                increment = increment === props.croppedContent.length - 1 ? 0 : increment += 1;
                setCroppedContentIndex(increment);
            },6000)
        }
    },[croppedContentIndex])
    return(
        <div id={`flex-square-${props.label.toLowerCase()}`} className={`ms-flex-square ${props.croppedContent ? 'ms-flex-square-cropped-content' : 'ms-flex-square-uncropped'}`}>
            <div className="ms-flex-square-panel">
                {props.croppedContent && (
                    props.croppedContent.map((c, i)=> <div key={`cropped-content-top-${i}`} className={`cropped-content ${i !== croppedContentIndex ? 'u-hide' : ''}`}>{c}</div>)
                )}
            </div>
            <div className="ms-flex-square-panel">
                {props.croppedContent && (
                    props.croppedContent.map((c, i)=> <div  key={`cropped-content-bottom-${i}`} className={`cropped-content ${i !== croppedContentIndex ? 'u-hide' : ''}`}>{c}</div>)
                )}
            </div>
            {props.label && props.isValidJob && (
                    <Link className="link-title" href={`${props.label.toLowerCase()}`}>
                        {props.label}
                   </Link>
              
            )}

        </div>
    );
}
export default FlexSquare;