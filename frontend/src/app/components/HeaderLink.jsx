"use client";
import {Link} from "@nextui-org/link";
import {pushToDataLayer} from '../utilities/analytics';

const HeaderLink = (props) => {
  const path = props.destination === "Home" ? "/" : `/${props.destination.toLowerCase()}`;
  const linkText = props.destination;

    return(
        <li className="header-link">
            <Link onClick={()=>{
        

                console.log("nav clicked", linkText, path);

                window.dataLayer = window.dataLayer || [];

                window.dataLayer.push({
                    event: "navigation_click",
                    navigation_location: "top_navigation",
                    link_text: linkText,
                    destination: path,
                });

                console.log("after push", window.dataLayer);
                
                // pushToDataLayer(`navigation_click`, {
                //     navigation_location: "top_navigation",    
                //     link_text: linkText,
                //     destination: path,
                // })
            }} href={`/${props.destination === "Home" ? "" : props.destination.toLowerCase()}`} >
                {linkText}
            </Link>
        </li>
    );
}
export default HeaderLink;