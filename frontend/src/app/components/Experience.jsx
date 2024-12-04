"use client"
import {Accordion, AccordionItem} from "@nextui-org/react";
const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Experience = () => {
    return(
        <div className="experience">
            <Accordion variant="light">
                <AccordionItem key="1" aria-label="Accordion 1" title="Full Stack Instructor | Tech Elevator">
                <h4>
                    2022-2023
                </h4>
                <ul className="experience-points">
                    <li>Delivered comprehensive training on Java (Spring Boot), PostgreSQL, Vue.js, and frontend development, preparing students for junior developer roles</li>
                    <li>Led remote classes and provided mentorship, helping students successfully complete capstone projects and secure positions in the tech industry</li>
                    <li>Mentored students in one-on-one meetings to address any challenges they had with projects and course work</li>
                </ul>
      
                </AccordionItem>
                <AccordionItem key="2" aria-label="Accordion 2" title="Full Stack Instructor | Tech Elevator">
                <h4>
                    2022-2023
                </h4>
                <ul className="experience-points">
                    <li>Delivered comprehensive training on Java (Spring Boot), PostgreSQL, Vue.js, and frontend development, preparing students for junior developer roles</li>
                    <li>Led remote classes and provided mentorship, helping students successfully complete capstone projects and secure positions in the tech industry</li>
                    <li>Mentored students in one-on-one meetings to address any challenges they had with projects and course work</li>
                </ul>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Full Stack Instructor | Tech Elevator">
                <h4>
                    2022-2023
                </h4>
                <ul className="experience-points">
                    <li>Delivered comprehensive training on Java (Spring Boot), PostgreSQL, Vue.js, and frontend development, preparing students for junior developer roles</li>
                    <li>Led remote classes and provided mentorship, helping students successfully complete capstone projects and secure positions in the tech industry</li>
                    <li>Mentored students in one-on-one meetings to address any challenges they had with projects and course work</li>
                </ul>
                </AccordionItem>
            </Accordion>
        </div>

    );
}
export default Experience;