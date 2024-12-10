"use client";

import Header from '../components/Header';
import {Image} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import NextUIModal from '../components/NextUIModal';



export default function Page(){ 

    const [isBlurred, setIsBlurred ] = useState(false);
    const [portfolioItem, setPortfolioItem] = useState({ name: '', description: '', image: '', title: ''});
    useEffect(()=>{},[portfolioItem])

    const portfolioData = [

        {
            name: 'item1',
            title: 'Seraphim Identity' ,
            description: "Lorem Ipsum", 
            image: "item-3.webp"
        },
        {
            name: 'item2',
            title: 'UI|UX',
            description: "Lorem Ipsum", 
            image: "item-2.webp"
        },
        {
            name: 'item3',
            title: 'UI|UX',
            description: "Item 2 Description", 
            image: "item-9.webp"
        },
        {
            name: 'item4',
            title: 'UI|UX',
            description: "Item 2 Description", 
            image: "item-11.webp"
        },
        {
            name: 'item5',
            title: 'UI|UX',
            description: "Item 2 Description", 
            image: "item-1.webp"
        },
        {
            name: 'item6',
            title: 'UI|UX',
            description: "Item 2 Description", 
            image: "item-4.webp"
        },
        {
            name: 'item7',
            description: "Item 7 Description", 
            title: '',
            image: "item-5.webp"
        },
        {
            name: 'item8',
            title: '',
            description: "Item 2 Description", 
            image: "item-6.webp"
        }, 
        {
            name: 'item9',
            title: '',
            description: "Item 2 Description", 
            image: "item-10.webp"
        }, 
        
    ];

    const selectPortfolioItem = (portfolioItem) => {
        const output = portfolioData.filter(cur => cur.name === portfolioItem)[0];
        return output;
    }

    const clickHandler = (portfolioItem) => {
        if(portfolioItem != null){
            const activePortfolioObj = selectPortfolioItem(portfolioItem);
            setPortfolioItem(activePortfolioObj);

        } 
        setIsBlurred(!isBlurred);
    }

    return (
        <>        
        <Header/>
        <div className="portfolio">
            <div className="portfolio-heading">
                <h2>Portfolio</h2>
                <p>Lorem Ipsum</p>
            </div>
          
            <div className="ms-flex-container">
            
                <div className="portfolio-layout">
                    <div className="instagrid">
                        <div className={`portfolio-item item-1 ${isBlurred ? 'portfolio-item-blurred' : ''}`}>
                            <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-3.webp"
                                onClick={()=>clickHandler('item1')}
                                />
                    
                        </div>
                        <div className="portfolio-item item-2">
                            <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-2.webp"
                                onClick={()=>clickHandler('item2')}
                                />
                        </div>
                        <div className="portfolio-item item-3">
                            <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-9.webp"
                                onClick={()=>clickHandler('item3')}
                                />
                        </div>
                    </div>
                    <div className="instagrid">
                        <div className="portfolio-item item-1">
                            <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-11.webp"
                                onClick={()=>clickHandler('item4')}
                                />
                        </div>
                        <div className="portfolio-item item-2">
                            <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-1.webp"
                                onClick={()=>clickHandler('item5')}
                            />
                        </div>
                        <div className="portfolio-item item-3">
                            <Image
                            alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-4.webp"
                                onClick={()=>clickHandler('item6')}
                            />
                        </div>
                    </div>
                    <div className="instagrid">
                        <div className="portfolio-item item-1">
                                <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-5.webp"
                                onClick={()=>clickHandler('item7')}
                                />
                        </div>
                        <div className="portfolio-item item-2">
                                <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-6.webp"
                                onClick={()=>clickHandler('item8')}
                                />
                        </div>
                        <div className="portfolio-item item-3">
                                <Image
                                alt="NextUI Fruit Image with Zoom"
                                src="/portfolio/item-10.webp"
                                onClick={()=>clickHandler('item9')}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NextUIModal
            isOpen={isBlurred}
            toggleModal={clickHandler}
            children 
            title={`${portfolioItem.title}`}
            description={`${portfolioItem.description}`}
            >
                <Image
                alt="NextUI Fruit Image with Zoom"
                src={`/portfolio/${portfolioItem.image}`}
                />
        </NextUIModal>
        </>

    ); 
}