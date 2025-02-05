"use client"

import Header from './Header';
import {Image} from "@nextui-org/react";
import {  useEffect, useState } from 'react';
import NextUIModal from './NextUIModal';
import {portfolioData} from '../data/portfolio';
import Footer from './Footer';

 const Portfolio = (props) => {
    console.log(props.portfolioData)
    const [isBlurred, setIsBlurred ] = useState(false);
    const [allPortfolioData, setAllPortfolioData] = useState([]);
    const [portfolioItem, setPortfolioItem] = useState({ name: '', description: '', image: '', title: ''});
    
    
    const limitItems = () => {
        const output = [];
        for (let i = 0; i < 9; i++){
            output.push(props.portfolioData[i]);
        }
        return output;
    }


    useEffect(()=>{
        const limitedPorffolioData = limitItems();
        setAllPortfolioData(limitedPorffolioData);
    },[])


    const selectPortfolioItem = (itemName) => {
        const output = allPortfolioData.filter(cur => cur.itemName === itemName)[0];
        return output;
    }

    const clickHandler = (itemName) => {
        if(itemName != null){
            const activePortfolioObj = selectPortfolioItem(itemName);
            setPortfolioItem(activePortfolioObj);

        } 
        setIsBlurred(!isBlurred);
    }

    const createPortfolioItems = (startIndex, endIndex) => {

        const items = allPortfolioData.slice(startIndex, endIndex);
        return items.map((c,i)=>{
            return(
                <div className={`portfolio-item item-${i+1}`} key={`portfolio-item-${i}`}>
                    <Image
                        alt={c.title}
                        src={c.imageUrl}
                        onClick={()=>clickHandler(c.itemName)}
                        />
                </div>
            );
        })
    }

    return (
        <>        
            <Header/>
            <div className="page">
                <div className="portfolio-heading">
                        <h2>Portfolio</h2>
                </div>
                <div className="portfolio">
       
                    <div className="ms-flex-container">
                        <div className="portfolio-layout">
                            <div className="instagrid">
                                {/* <div className={`portfolio-item item-1 ${isBlurred ? 'portfolio-item-blurred' : ''}`}>
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
                                </div> */}
                                {createPortfolioItems(0,3)}
                            </div>
                            <div className="instagrid">
                                {/* <div className="portfolio-item item-1">
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
                                </div> */}
                                {createPortfolioItems(3,6)}
                            </div>
                            <div className="instagrid">
                        
                                {/* <div className="portfolio-item item-1">
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
                                </div> */}
                                {createPortfolioItems(6,9)}
                            </div>
                        </div>
                    </div>
                </div>
                <NextUIModal
                    isOpen={isBlurred}
                    toggleModal={clickHandler}
                    title={`${portfolioItem.title}`}
                    description={`${portfolioItem.description}`}
                    ba
                    >
                        <Image
                        alt="NextUI Fruit Image with Zoom"
                        src={portfolioItem.imageUrl}
                        />
                </NextUIModal>
            </div>
            <Footer/>
       </>
    ); 
}
export default Portfolio;