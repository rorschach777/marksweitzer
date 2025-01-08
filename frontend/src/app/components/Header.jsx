"use client"
import { useEffect, useState, useRef} from "react";
import HeaderLink from './HeaderLink';
import gsap from "gsap";

import Logo from './Logo';

const Header = () => {
   

    const [headerOpen, setHeaderOpen ] = useState(false);
    const [hideForm, setHideForm] = useState(true);
    const tl =  useRef(null);


    const menuHandler = () => {
        setHeaderOpen(!headerOpen);
    
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

    const headerLinks = ["Home", "Contact", "Profile", "Experience", "Portfolio"];

    return(
        <>
            <header className={`ms-mega-menu`}>
                <div>
                    <div className="ms-container">
                        <div className="ms-flex-container">
                            <nav >
                                <ul>
                                    { headerLinks.map((c,i)=> <HeaderLink key={`header-link-${i}`} destination={c} />) }
                                </ul>
                            </nav>
                            <Logo/>
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