import React from "react";
import "./index.css"



function Footer() {
    return (
<section className="getInTouchSection">
            <h2 className="sectionHeader">Get in Touch</h2>
                <div className="icons">
                    <div className="links">
                        <a href="https://github.com/bganser15" target="_blank" rel="noreferrer">
                        <img src={require("../../assets/img/github.svg").default} href="https://bganser15.github.io/run-buddy/"alt=""/>
                        <h3>Github</h3></a>
                    </div>

                
                    <div className="links">
                        <a href="mailto:15brganser@gmail.com">
                        <img src={require("../../assets/img/email.svg").default} alt=""/>
                        <h3>Email</h3></a>
                    </div>
                    
                    
                    <div className="links">
                        <a href="https://www.linkedin.com/in/brittanyganser/" target="_blank" rel="noreferrer">
                        <img src={require("../../assets/img/linkedin.png")} alt=""/>
                        <h3>LinkedIn</h3></a>
                    </div>
                </div>
        </section> 
    )
    }
export default Footer;