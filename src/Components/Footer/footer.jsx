import React from "react"
import "./footer.css"

const Footer=()=>{
    return(
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
                 <div className="flexColStart f-left">
                    <span><img src="./logo2.png"></img></span>
                    <span className="secondaryText">
                        Our vision is to make all people<br/>
                        the best place to live for them.
                    </span>
                 </div>
                 <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">11 Street New york,USA</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Service</span>
                        <span>Product</span>
                        <span>About Us</span>

                    </div>
                 </div>
                 
            </div>
            <div className="secondaryText flexCenter copyright">©Sarbojit@2003</div>
        </section>
    )
    
}
export default Footer ;