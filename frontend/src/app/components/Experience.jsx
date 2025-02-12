"use client"


import NextUiSlider from './NextUiSlider';
import {useEffect, useState} from "react" 
import {Accordion, AccordionItem} from "@nextui-org/react";
import { useMsContext } from '../context/ms-context';
import { filterResumeContent  } from '../utilities/job-logic';

const Experience =  (props) => {

    const { jobTitle, jobContent } = useMsContext();
    const year = new Date().getFullYear();
    const [sliderIndex, setSliderIndex] = useState(2025);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [resume, setResume] = useState(null);

    const updateOutputText = () => {
        const outputEl = document.getElementsByTagName("output");
        if(outputEl !== undefined){
            outputEl[0].classList.add("hide")
            const updatedText =  outputEl[0].innerText.split(" ")[0];
            outputEl[0].innerText = updatedText;
            window.setTimeout(()=>{
                outputEl[0].classList.remove("hide");
                outputEl[0].classList.add("show")
            }, 500)
        }
    
    }

    const onChangeHandler = (value) => {
        setSliderIndex(value);
    }

    const updateFilteredExperience = () => {
        const filteredExperience = filterResumeContent(sliderIndex, resume);
        setFilteredJobs(filteredExperience);

    }
    useEffect(()=>{
        setResume(jobContent);
        updateOutputText();
    },[jobContent]);
    

    // useEffect(()=>{
    //     // const foundResume = getApplicableResume(jobTitle);
    //     // const foundResume = props.resumeData.filter(r=> r.jobTitle.cookieValue === jobTitle)[0];
    //     // setResume(foundResume);
    //     updateOutputText();
    // },[jobTitle]);

    useEffect(()=>{

        updateFilteredExperience();
        updateOutputText();
    },[resume])

    // useEffect(()=>{
    //     // updateFilteredExperience();
    // }, [resume])
 
    useEffect(()=>{
        updateFilteredExperience();
        updateOutputText();
    },[sliderIndex])

    // useEffect(()=>{
    //     console.log(resume)
    // },[])

    return(
        <div className="experience">
            <div className="experience-left">
                <div className="experience-controls">
                    <NextUiSlider 
                    minValue={year - 15}
                    maxValue={year}
                    defaultValue={2025}
                    label="Experience Timeline"
                    onChange={onChangeHandler}
                    />
                    <span className="slider-output">{sliderIndex}</span>
                </div>
               
                { filteredJobs !== null && (filteredJobs.map((filteredJob, filteredJobIdx)=>{
                    return(
                        <section key={`filteredJob-${filteredJobIdx}`}>
                        <h4>{filteredJob.company}</h4>
                        <h5> {filteredJob.displayTitle} | {filteredJob.displayYears}</h5>
                            <ul key={`${filteredJob}-duty-${filteredJobIdx}}`}>
                                {filteredJob.duties.map((d,i)=>{
                                    return <li key={`duty-${i}`}>{d}</li>
                                })}
                            </ul>
                        </section>
                    )
                }))}   
            
        </div>
            <div className="experience-right">
            <Accordion selectionMode="multiple"
            defaultExpandedKeys={["1", "2", "3"]}
            >
  
            {resume !== null && (
               
                <AccordionItem key="1" 
                aria-label="Accordion 1" 
                title={resume.skillsDisplayName}
                >
                    <ul>
                        {resume != null && resume.skills.map((c,i)=> <li key={`resume-experience-skill-${i}`}>{c}</li>)}
                    </ul>
                </AccordionItem>
                )}

                {/* <AccordionItem key="2" aria-label="Accordion 2" title="Version Control & Tools">
                <ul>
                    <li>Git</li>
                    <li>Adobe Creative Suite</li>
                    <li>Sketch</li>
                    <li>Figma</li>
                </ul>
                </AccordionItem> */}
                <AccordionItem key="3" aria-label="Accordion 3" title="Professional Certifications">
                Microsoft 70-480: Programming with HTML5, CSS3, JavaScript – Enhanced expertise in frontend development, focusing on responsive and interactive web design.

                </AccordionItem>
            </Accordion>
 
            </div>
        </div>

    );
}
export default Experience;