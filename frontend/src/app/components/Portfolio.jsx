"use client"

import Header from './Header';
import {Image} from "@nextui-org/react";
import {  useEffect, useState } from 'react';
import NextUIModal from './NextUIModal';
import Footer from './Footer';
import {pushToDataLayer} from '../utilities/analytics';

 const Portfolio = (props) => {
    const [isBlurred, setIsBlurred ] = useState(false);
    const [allPortfolioData, setAllPortfolioData] = useState([]);
    const [portfolioItem, setPortfolioItem] = useState({ name: '', description: '', image: '', title: ''});
    
    
    const limitItems = () => {
        const output = [];
        for (let i = 0; i < 18; i++){
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
        const items = [...allPortfolioData]
        const updatedList = items.sort((a, b) =>
            new Date(b.publishedAt) - new Date(a.publishedAt)
        )
        .slice(startIndex, endIndex);

        return updatedList.map((c,i)=>{
            const portfolioItemTitle = c.title;
            const portfolioItemName = c.itemName
            const portfolioImageUrl = c.imageUrl
            return(
                <div className={`portfolio-item item-${i+1}`} key={`portfolio-item-${i}`}>
                    <Image
                        alt={portfolioItemTitle}
                        src={portfolioImageUrl}
                        onClick={()=>{
                            clickHandler(portfolioItemName);
                            pushToDataLayer("portfolio_item_click", {
                                portfolio_item_title: portfolioItemTitle,
                                portfolio_item_name: portfolioItemName
                            });
                        }}
                            
        
                    
                            
                        
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
                     <div className="ms-flex-container">
                        <div className="portfolio-layout">
                            <div className="instagrid">
                                 {createPortfolioItems(9,12)}
                            </div>
                            <div className="instagrid">
                                {createPortfolioItems(12,15)}
                            </div>
                            <div className="instagrid">
                                {createPortfolioItems(15,18)}
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