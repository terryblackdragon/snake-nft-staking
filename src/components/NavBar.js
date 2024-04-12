import React, { useState } from 'react'
import "../assets/styles.css";
import menu from "../assets/img/menu.png"
import close from "../assets/img/cancel.png"
import Connect from './Connect';


function NavBar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <header className="header">
            <div className="brand">
                <a href="/" className="brand-logo">
                    SNAKE APE
                </a>
                <div className="nav-burger" id="nav-burger">
                    <img src={menu} alt="Menu" onClick={() => {
                        setIsNavExpanded(true);
                    }} />
                </div>
            </div>
            <nav className={isNavExpanded ? "nav-custom open-menu" : "nav-custom is-active"} >
                <div className={isNavExpanded ? "nav-cancel" : "nav-cancel is-active"}>
                    <img src={close} onClick={() => {
                        setIsNavExpanded(false);
                    }} alt="Cancel" />
                </div>
                <div className='nav-links_div'>
                    <a href="/" className="nav-link_ref">Mint</a>
                    <Connect />
                </div>
            </nav>
        </header>
    );
}


export default NavBar





