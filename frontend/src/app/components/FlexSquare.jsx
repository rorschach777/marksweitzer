"use client";
import { useEffect, useState } from 'react';
import './FlexSquare.css';
const FlexSquare = ( props ) => {
    const [croppedContentIndex, setcroppedContentIndex] = useState(0);
    useEffect(()=>{
        if(props.croppedContent){
            setTimeout(()=>{
                let increment =  croppedContentIndex;
                increment = increment >= props.croppedContent.length ? 0 : increment += 1;
                setcroppedContentIndex(increment);
            },2000)
        }
    },[])
    return(
        <div className={`ms-flex-square ${props.croppedContent ? 'ms-flex-square-cropped-content' : ''}`}>
            <div className="ms-flex-square-panel">
                {props.croppedContent && (
                    props.croppedContent.map((c, i)=> <span key={`cropped-content-top-${i}`} className={`cropped-content ${i !== croppedContentIndex ? 'u-hide' : ''}`}>{c}</span>)
                )}
            </div>
            <div className="ms-flex-square-panel">
                {props.croppedContent && (
                    props.croppedContent.map((c, i)=> <span  key={`cropped-content-bottom-${i}`} className={`cropped-content ${i !== croppedContentIndex ? 'u-hide' : ''}`}>{c}</span>)
                )}
            </div>
            {props.label && (
                <span className="label">Content</span>
            )}
           
        </div>
    );
}
export default FlexSquare;