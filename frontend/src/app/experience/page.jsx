import Header from '../components/Header';
import {Accordion, AccordionItem} from "@nextui-org/react";
import Experience from '../components/Experience';


export default function Page(){
    
    return (
        <>
            <Header/>
            <div className="page">
                <div className="ms-container">
                    <div className="ms-flex-container ms-heading">
                        <div className="column">
                            <h1 className="page-title-main">Experience</h1>
                            <span className="page-title page-title-left">Experience</span>
                        </div>
                        <div className="column">
                            <span className="page-title page-title-right">Experience</span>
                        </div>
                        <div className="column"></div>
                        <div className="column"></div>
                    </div>
                </div>
                <div className="ms-container">
                    <div className="ms-scrollable-content">
                        <Experience />
                    </div>
                </div>
            </div>
        </>
    );
}