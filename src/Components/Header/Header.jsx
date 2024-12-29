import React from "react"
import {useState} from "react"
import {BiMenuAltRight} from "react-icons/bi"
import "./Header.css"
import OutsideClickHandler from "react-outside-click-handler"
 const Header=()=>{
    const [menuOpened,setMenuOpened]=useState(false)
    const getMenuStyle=(menuOpened)=>{
        if(document.documentElement.clientWidth<=800)
        {
            return{right:!menuOpened && "-100%"};
        }
    }
    return(
        <section  className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <img src="./logo.png" alt="logo" width={100} />
                <OutsideClickHandler onOutsideClick={()=>{
                    setMenuOpened(false) 
                }}>
                <div className="flexCenter h-menu"
                style={getMenuStyle(menuOpened)}>
                    <a href="#residences">Residencies </a>
                    <a href="#values">Our Value</a>
                    <a href="#contact">Contact Us</a>
                    <a href="#getstarted">Get Started</a>
                    <button type="button" class="button">
                    <a href="">Contact</a>
                    </button>
                  
                </div>
                </OutsideClickHandler>

                <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                    <BiMenuAltRight size={30}/>
                </div>
            </div>
           
        </section>
    )
 }

 export default Header