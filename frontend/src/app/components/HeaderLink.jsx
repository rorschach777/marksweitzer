"use client";
import {Link} from "@nextui-org/link";

const HeaderLink = (props) => {
    return(
        <li className="header-link">
            <Link href={`/${props.destination.toLowerCase()}`} >{ props.destination}</Link>
        </li>
    );
}
export default HeaderLink;