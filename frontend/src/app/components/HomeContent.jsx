"use client";

import Header from './Header';
import FlexSquare from './FlexSquare';
import { useMsContext } from '../context/ms-context';
import { useEffect } from 'react';

const HomeContent = () => {

    const {setupFilteredJob, jobTitle, isValidJob, sanityJobTitles } = useMsContext();


    return (
        <div className="ms-full-screen-container">
            { isValidJob && (<Header/>)}
            <div className="ms-h-flex-container ms-home-screen ">
                {/* 1 */}
                { isValidJob && (
                <div className="ms-v-flex-container">
                    <FlexSquare label="Profile"  isValidJob={isValidJob}/>
                    <FlexSquare label="Contact"  isValidJob={isValidJob}/>
                </div>
                )}
            
                {/* 2 */}
                <div className={`ms-v-flex-container ${isValidJob === false ? 'logo-flex-container' : ''} logo-section`}>
                    <FlexSquare label="M" croppedContent={["M", "S"]}/>
                    <FlexSquare label="S" croppedContent={["M", "S"]}/>
                </div>
                {/* 3 */}
                { isValidJob && (
                    <div className="ms-v-flex-container" >
                    <FlexSquare label="Experience" isValidJob={isValidJob}/>
                    <FlexSquare label="Portfolio" isValidJob={isValidJob}/>
                    </div>
                )}
            
            </div>
        </div>
    );
}

export default HomeContent;