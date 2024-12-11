"use client"


import NextUiSlider from './NextUiSlider';
import {useEffect, useState} from "react" 
import {Accordion, AccordionItem, slider} from "@nextui-org/react";
import {resumeData} from "../data/resume"




const Experience = () => {
    const year = new Date().getFullYear();
    const [sliderIndex, setSliderIndex] = useState(2022)

    const updateOutputText = () => {
        const outputEl = document.getElementsByTagName("output");
        const updatedText =  outputEl[0].innerText.split(" ")[0];
        outputEl[0].innerText = updatedText;
       

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
    console.log(filteredJobs)
    return(
        <div className="experience">
            <div className="experience-left">
                <div className="experience-controls">
                    <NextUiSlider 
                    maxValue={year}
                    defaultValue={2022}
                    minValue={year - 14}
                    label="Experience Timeline"
                    onChange={onChangeHandler}
                    />
                </div>
                {  filteredJobs.map((filteredJob, filteredJobIdx)=>{
                    return(
                            <section key={`filteredJob-${filteredJobIdx}`}>
                            <h4>{filteredJob.title} </h4>
                            <h5>{filteredJob.company} | {filteredJob.yearStart}-{filteredJob.yearEnd}</h5>
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
            </div>
        </div>

    );
}
export default Experience;