import Header from '../components/Header';
import Image from 'next/image';
export default function Page(){ 
    return (
        <div className="portfolio">
            <Header/>
            <div className="ms-full-screen-container ">
                <div className="ms-flex-container">
                    <div className="portfolio-layout">
                        <div className="instagrid">
                            <div className="item-1">
                                <span>Item 1</span>
                            </div>
                            <div className="item-2">
                                <span>Item 2</span>
                                </div>
                            <div className="item-3">
                                <span>Item 3</span>
                            </div>
                        </div>
                        <div className="instagrid">
                            <div className="item-1">
                                <span>Item 1</span>
                            </div>
                            <div className="item-2">
                                <span>Item 2</span>
                                </div>
                            <div className="item-3">
                                <span>Item 3</span>
                            </div>
                        </div>
                        <div className="instagrid">
                            <div className="item-1">
                                <span>Item 1</span>
                            </div>
                            <div className="item-2">
                                <span>Item 2</span>
                                </div>
                            <div className="item-3">
                                <span>Item 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}