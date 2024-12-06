import Header from '../components/Header';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Experience from '../components/Experience';
import PageHeading from '../components/PageHeading'

export default function Page(){
    
    return (
        <>
            <Header/>
            <div className="page">
                <PageHeading title="Experience" />
                <div className="ms-container">
                    <Experience />
                </div>
            </div>
        </>
    );
}