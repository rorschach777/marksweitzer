"use client";
import {Link} from "@nextui-org/link";
import {pushToDataLayer} from '../utilities/analytics';

const HeaderLink = (props) => {
  const path = props.destination === "Home" ? "/" : `/${props.destination.toLowerCase()}`;
  const linkText = props.destination;

    return(
        <li className="header-link">
            <Link onClick={()=>{
                    pushToDataLayer(`navigation_click`, {
                    navigation_location: "top_navigation",    
                    link_text: linkText,
                    destination: path,
                })
            }} href={`/${props.destination === "Home" ? "" : props.destination.toLowerCase()}`} >
                {linkText}
            </Link>
        </li>
    );
}
export default HeaderLink;