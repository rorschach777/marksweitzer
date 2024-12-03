"use client"
import { useEffect, useState } from "react";
import {Link} from "@nextui-org/link";
import './Header.css';
import ContactForm from './ContactForm';

const Header = () => {
    const [headerOpen, setHeaderOpen ] = useState(false);
    const [hideForm, setHideForm] = useState(true);
    const menuHandler = () => {
        setHeaderOpen(!headerOpen);
    }
    const formDisplayHandler = () => {
        setHideForm(!hideForm);
    }

    return(
        <>
            <header className={`ms-mega-menu ${headerOpen ? 'ms-mega-menu-open' : ''}`}>
            <div>
                <div className="ms-container">
                    <div className="ms-flex-container">
                        <nav >
                            <ul >
                                <li className="header-link">
                                    <Link href="/">Home</Link>
                                </li>
                                <li onClick={formDisplayHandler} className="header-link">Contact</li>
                               
                                <li className="header-link">Studios</li>
                            </ul>
                        </nav>
                        <ContactForm hidden={`${hideForm ? 'move-right' : ''}`}/>
                    </div>
                </div>
            </div>
            </header>
            <div className={`menu ${headerOpen ? 'menu-open' : 'menu-closed'}`} onClick={menuHandler}>
                <span></span>
                <span></span>
            </div>
        </>
    );
}
export default Header;