"use client"
import { useEffect, useState, useRef } from "react";
import {Link} from "@nextui-org/link";
import gsap from "gsap";

import ContactForm from './ContactForm';

const Header = () => {
    const [headerOpen, setHeaderOpen ] = useState(false);
    const [hideForm, setHideForm] = useState(true);
    const tl =  useRef(null);


    const menuHandler = (e) => {
        setHeaderOpen(!headerOpen);

    }
    const formDisplayHandler = () => {
  
        setHideForm(!hideForm);
    }
    
    useEffect(()=>{
        tl.current = gsap.timeline({paused: true})
        tl.current.to('.ms-mega-menu', {opacity: 1, duration: 1, top: 0});
        tl.current.to('.header-link', {opacity: 1, duration: 1, stagger: 0.3, marginTop: 0}, ">-0.7");
    },[]);

    useEffect(()=>{
        if(headerOpen) {
            tl.current.play();
        } else {
            tl.current.timeScale(2)
            tl.current.reverse();
   

        }
    },[headerOpen])


    return(
        <>
            <header className={`ms-mega-menu`}>
            <div>
                <div className="ms-container">
                    <div className="ms-flex-container">
                        <nav >
                            <ul >
                                <li className="header-link">
                                    <Link href="/">Home</Link>
                                </li>
                                <li onClick={formDisplayHandler} className="header-link">Contact</li>
                                <li className="header-link">Profile</li>
                                <li className="header-link">Experience</li>
                                <li className="header-link">Portfolio</li>

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