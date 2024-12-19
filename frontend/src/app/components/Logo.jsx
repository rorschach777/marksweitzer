"use client";
import {useEffect, useState} from "react";
const Logo = () => {
    const logoLetters = ["M", "S"];
    const [letterIdx, setletterIdx] = useState(1);
    useEffect(()=>{
        setTimeout(()=>{
            let increment = letterIdx;
            increment = increment === 0 ? 1 : 0;
            setletterIdx(increment);
        },6000)
    },[letterIdx])
    
    return (
        <div className="logo-outer-container">
        <div className="logo">
            <div className="logo-container">
                <div className={`logo-item top-left`}>
                    <span className={`${letterIdx === 0 ? 'logo-item-m' : 'logo-item-s'}`}>{logoLetters[letterIdx]}</span>
                </div>
                <div className="logo-item bottom-left">
                    <span className={`${letterIdx === 0 ? 'logo-item-m' : 'logo-item-s'}`}>{logoLetters[letterIdx]}</span>
                </div>
            </div>
            <div className="logo-container">
                <div className="logo-item top-right">
                    <span className={`${letterIdx === 0 ? 'logo-item-m' : 'logo-item-s'}`}>{logoLetters[letterIdx]}</span>
                </div>
                <div className="logo-item bottom-right">
                    <span className={`${letterIdx === 0 ? 'logo-item-m' : 'logo-item-s'}`}>{logoLetters[letterIdx]}</span>
                </div>
            </div>

        </div>
        <span className="logo-side-label">Mark Sweitzer</span>
        </div>
     
 
    );
}
export default Logo;