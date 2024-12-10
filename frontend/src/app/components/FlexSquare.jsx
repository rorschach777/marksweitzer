"use client";
import { useEffect, useState } from 'react';
import {Link} from '@nextui-org/link'

const FlexSquare = ( props ) => {
    const [croppedContentIndex, setcroppedContentIndex] = useState(0);
    useEffect(()=>{
        let increment =  croppedContentIndex;
        if(props.croppedContent){
            setTimeout(()=>{
            
                increment = increment === props.croppedContent.length - 1 ? 0 : increment += 1;
                setcroppedContentIndex(increment);
            },6000)
        }
    },[croppedContentIndex])
    return(
        <div className={`ms-flex-square ${props.croppedContent ? 'ms-flex-square-cropped-content' : ''}`}>
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
            {props.label && (
                <Link className="label" href={`${props.label.toLowerCase()}`}>
                    {props.label}
                </Link>
              
            )}
           
        </div>
    );
}
export default FlexSquare;