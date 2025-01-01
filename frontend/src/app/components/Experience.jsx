"use client"


import NextUiSlider from './NextUiSlider';
import {useEffect, useState} from "react" 
import {Accordion, AccordionItem, Button} from "@nextui-org/react";
import {resumeData} from "../data/resume"


import { useMsContext } from '../context/ms-context';

const Experience = () => {
    const year = new Date().getFullYear();
    const [sliderIndex, setSliderIndex] = useState(2022);
    const [hideLabel, setHideLabel] = useState(false);
    const {jobTitle} = useMsContext();
    const updateOutputText = () => {
        const outputEl = document.getElementsByTagName("output");
        outputEl[0].classList.add("hide")
        const updatedText =  outputEl[0].innerText.split(" ")[0];
        outputEl[0].innerText = updatedText;
        window.setTimeout(()=>{
            outputEl[0].classList.remove("hide");
            outputEl[0].classList.add("show")
        }, 500)
    }

    const onChangeHandler = (value) => {
        setSliderIndex(value);
    }
    const filteredJobs = resumeData.filter( j => {
        let matchedByYear =  (sliderIndex >= j.yearStart && sliderIndex <= j.yearEnd) ? true : false;
        if(matchedByYear){
            return j;
        }
    });
    useEffect(()=>{
        updateOutputText();
    },[])
    useEffect(()=>{
        updateOutputText();
    },[sliderIndex])

    return(
        <div className="experience">
            <div className="experience-left">
                {jobTitle}
                <div className="experience-controls">
                    <NextUiSlider 
                    minValue={year - 15}
                    maxValue={year}
                    defaultValue={2024}
                    label="Experience Timeline"
                    onChange={onChangeHandler}
                    />
                    <span className="slider-output">{sliderIndex}</span>
                </div>
                {  filteredJobs.map((filteredJob, filteredJobIdx)=>{
                    return(
                        <section key={`filteredJob-${filteredJobIdx}`}>
                        <h4>{filteredJob.title} </h4>
                        <h5>{filteredJob.company} | {filteredJob.displayYears}</h5>
                            <ul key={`${filteredJob}-duty-${filteredJobIdx}}`}>
                                {filteredJob.duties.map((d,i)=>{
                                    return <li key={`duty-${i}`}>{d}</li>
                                })}
                            </ul>
                        </section>
                    )
                })}   
            
        </div>
            <div className="experience-right">
            <Accordion selectionMode="multiple"
            defaultExpandedKeys={["1", "2", "3"]}
            >
                <AccordionItem key="1" 
                aria-label="Accordion 1" 
                title="Languages & Frameworks"
                
                >
                    <ul>
                        <li>C#</li> 
                        <li>Java (Spring Boot)</li>
                        <li>PHP</li>
                        <li>TypeScript</li>
                        <li>JavaScript (Vanilla, React, Next.js, Vue.js, Redux)</li>
                        <li>HTML5, CSS, SCSS, Bootstrap, Tailwind</li>
                    </ul>
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Version Control & Tools">
                <ul>
                    <li>Git</li>
                    <li>Adobe Creative Suite</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                </ul>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Professional Certifications">
                Microsoft 70-480: Programming with HTML5, CSS3, JavaScript – Enhanced expertise in frontend development, focusing on responsive and interactive web design.

                </AccordionItem>
            </Accordion>
            {/* <Button 
            href="./resume/ms-resume.pages"
            variant='bordered'>Download Resume</Button> */}
            </div>
        </div>

    );
}
export default Experience;