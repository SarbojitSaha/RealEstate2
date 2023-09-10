import React from "react"
import "./contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"

 const Contact=()=>{
    return(
        <section className="contact-wrapper">
        <div className="paddings innerWidth flexCenter contact-container">

            <div className="flexColStart contact-left">
                <span className="orangeText">Our Contacts</span>
                <span className="primaryText">Easy to Contact Us</span>
                <span className="secondaryText">We always ready to help by providing the best services for you.
                <br />
                We believe a good place to live make your life better
                <br/>
                </span>

                <div className="flexcolStart contactModes">
                {/*first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 456</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call</div>
                        </div>
                        {/* mode 2 */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 456</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 456</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>
                        {/* mode 4 */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexcenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 456</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
                 

            </div>
            <div className="flexCenter contact-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    )
 }

 export default Contact