"use client"

import Header from './Header';
import {Image} from "@nextui-org/react";
import {  useEffect, useState } from 'react';
import NextUIModal from './NextUIModal';
import Footer from './Footer';

 const Portfolio = (props) => {
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
                                {createPortfolioItems(0,3)}
                            </div>
                            <div className="instagrid">
                                {createPortfolioItems(3,6)}
                            </div>
                            <div className="instagrid">
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