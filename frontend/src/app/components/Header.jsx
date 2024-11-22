"use client"
import { useState } from "react";
import './Header.css';


const Header = () => {
    const [headerOpen, setHeaderOpen ] = useState(false);
    const menuHandler = () => {
        setHeaderOpen(!headerOpen);
    }
    return(
        <>
        <div className={`menu ${headerOpen ? 'menu-open' : 'menu-closed'}`} onClick={menuHandler}>
            <span></span>
            <span></span>
        </div>
        <header className={`ms-mega-menu ${headerOpen ? 'ms-mega-menu-open' : ''}`}>
          <div>
            <div className="ms-container">
                <nav >
                    <ul >
                        <li>Home</li>
                        <li>Community</li>
                        <li>Studios</li>
                    </ul>
                </nav>
            </div>
           </div>
        </header>
    
        </>
    );
}
export default Header;