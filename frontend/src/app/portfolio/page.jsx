"use client";

import Header from '../components/Header';
import {Image} from "@nextui-org/react";
import { useState } from 'react';




export default function Page(){ 

    const [isBlurred, setIsBlurred ] = useState(false);


    const clickHandler = () => {
        setIsBlurred(!isBlurred);
    }

    return (
        <>        
        <Header/>
        <div className="portfolio">
      
        <div className="ms-flex-container">
                    <div className="portfolio-layout">
                        <div className="instagrid">
                            <div className={`portfolio-item item-1 ${isBlurred ? 'portfolio-item-blurred' : ''}`}>
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/portfolio/item-3.webp"
                                    />
                            </div>
                            <div className="portfolio-item item-2">
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/portfolio/item-2.webp"
                                    />
                            </div>
                            <div className="portfolio-item item-3">
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/portfolio/item-9.webp"
                                    />
                            </div>
                        </div>
                        <div className="instagrid">
                            <div className="portfolio-item item-1">
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/portfolio/item-11.webp"
                                    />
                            </div>
                            <div className="portfolio-item item-2">
                                <Image
                                    alt="NextUI Fruit Image with Zoom"
                                        src="/portfolio/item-1.webp"
                                />
                            </div>
                            <div className="portfolio-item item-3">
                                <Image
                                alt="NextUI Fruit Image with Zoom"
                                   src="/portfolio/item-4.webp"
                                />
                            </div>
                        </div>
                        <div className="instagrid">
                            <div className="portfolio-item item-1">
                                 <Image
                                    alt="NextUI Fruit Image with Zoom"
                                    src="/portfolio/item-5.webp"
                                    />
                            </div>
                            <div className="portfolio-item item-2">
                                 <Image
                                    alt="NextUI Fruit Image with Zoom"
                                       src="/portfolio/item-6.webp"
                                    />
                            </div>
                            <div className="portfolio-item item-3">
                                 <Image
                                    alt="NextUI Fruit Image with Zoom"
                                       src="/portfolio/item-10.webp"
                                    />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </>

    ); 
}