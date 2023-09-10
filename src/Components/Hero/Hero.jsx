import React from "react"
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup"
import {motion} from "framer-motion"
const Hero=()=>{
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">

                <div className="flexColStart hero-left">
                    <div className="hero-title">
                    <div className="orange-circle" />
                    <motion.h1
                    initial={{y:"2rem",opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{duration:2,type:"tween"}}
                    >
                       <h1>
                           Discover <br/>
                           Most Suitable <br/>
                           Property
                       </h1> 
                     </motion.h1>
                       <div className="blue-circle" />
                    </div>
                    <div className="secondaryText flexColStart hero-des">
                        <span>
                            Find a variety of property that suits you very easily.
                        </span>
                        <span>
                            Forget all difficulties in finding a residence for you
                        </span>
                    </div>
                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="blue"></HiLocationMarker>
                        <input type="text" />
                        <button className="button">Search</button>
                    </div>
                    <div>
                        <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span ><CountUp start={8800} end={9000} duration={4} />
                            <span>+</span>
                            </span>
                            <span className="secondaryText">Premium products</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span ><CountUp start={1950} end={2210} duration={4} />
                            <span>+</span>
                            </span>
                            <span className="secondaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span ><CountUp start={20} end={27} duration={4} />
                            <span>+</span>
                            </span>
                            <span className="secondaryText">Award Winnings</span>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                <motion.div
                  initial={{x:"7rem",opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:2,type:"tween"}}
                    >
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )

    
}
export default Hero