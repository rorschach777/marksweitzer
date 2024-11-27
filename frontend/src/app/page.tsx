
import styles from "./page.module.css";
import {Button} from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"
import './grid.css';
import Header from './components/Header';
import FlexSquare from './components/FlexSquare';

export default function Home() {
  return (
    <div className="root-container ms-home">
      <div className="ms-full-screen-container">
        <Header/>
        <div className="ms-h-flex-container ms-home-screen ">
          {/* 1 */}
          <div className="ms-v-flex-container">
            <FlexSquare label="Profile"/>
            <FlexSquare label="Skills"/>
          </div>
          {/* 2 */}
          <div className="ms-v-flex-container">
            <FlexSquare croppedContent={["M", "S"]}/>
            <FlexSquare croppedContent={["M", "S"]}/>
          </div>
          {/* 3 */}
          <div className="ms-v-flex-container">
            <FlexSquare label="Experience"/>
            <FlexSquare label="Portfolio"/>
          </div>
        </div>
        <footer className="footer">Mark Sweitzer | &copy; All Rights Reserved 2024 </footer>
      </div>

    </div>
  );
}
