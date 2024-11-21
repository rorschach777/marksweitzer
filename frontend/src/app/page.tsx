
import styles from "./page.module.css";
import {Button} from "@nextui-org/button";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react"
import './grid.css';


export default function Home() {
  return (
    <div >
      <div className="ms-full-screen-container">
        <div className="menu">Menu</div>
        <div className="ms-h-flex-container ms-home-screen ">
          {/* 1 */}
          <div className="ms-v-flex-container">
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
          </div>
          {/* 2 */}
          <div className="ms-v-flex-container">
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
          </div>
          {/* 3 */}
          <div className="ms-v-flex-container">
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
              <div className="ms-flex-square">
                  <div>left</div>
                  <div>right</div>
              </div>
          </div>
     
  
        </div>
      </div>
    </div>
  );
}
