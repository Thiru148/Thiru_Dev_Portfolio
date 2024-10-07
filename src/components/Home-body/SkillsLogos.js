import React from "react";
import "../Home-body/BodyStyles.css"
import gitHub from "../../assets/images/github.png"
import react from "../../assets/images/react-js.png"
import postman from "../../assets/images/postman.png"
import flutter from "../../assets/images/flutter.png"
import bruno from "../../assets/images/bruno.jfif"
import mongo from "../../assets/images/mongo.png"
import node from "../../assets/images/nodejs.png"
import npm from "../../assets/images/npm.png"
import jquery from "../../assets/images/jquery.png"
import html from "../../assets/images/html.png"
import css3 from "../../assets/images/css3.png"
const SkillsLogos = ()=>{
    return(
        <div>
            <ul className="skill-logos-div">
                <li><img src={gitHub} alt="github logo"/></li>
                <li><img src={react} alt="react logo"/></li>
                <li><img src={postman} alt="postman logo"/></li>
                <li><img src={flutter} alt="flutter logo"/></li>
                <li><img src={bruno} alt="bruno logo"/></li>
                <li><img src={mongo} alt="mongo logo"/></li>
                <li><img src={node} alt="node logo"/></li>
                <li><img src={npm} alt="npm logo"/></li>
                <li><img src={jquery} alt="flutter logo"/></li>
                <li><img src={html} alt="bruno logo"/></li>
                <li><img src={css3} alt="mongo logo"/></li>
                <li><img src={gitHub} alt="github logo"/></li>
            </ul>
            
        </div>
    )
}
export default SkillsLogos;