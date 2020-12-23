import React, { useState, useEffect } from 'react'
import "./Nav.css"
function Nav(){
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true)
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.addEventListener("scroll")
        }
    }, [])


    return(
        <div className={`nav ${show && "nav__black"}`}>
            <div className="div__logo">
                <h2 className="nav__logo">Mama Care</h2>
            </div>
            <div className="div__links">
                <ul className="nav__links">
                    <li><a className="nav__button" href="/home">Home</a></li>
                    <li><a className="nav__button" href="/shop">Shop</a></li>
                    <li><a className="nav__button" href="/gallery">Gallery</a></li>
                    <li><a className="nav__button" href="/sale">Sale</a></li>
                    <li><a className="nav__button" href="/about">About</a></li>
                    <li><a className="nav__button" href="/cart">Cart</a></li>
                    <li><a className="nav__button" href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="div__avatar">
                <img className="nav__avatar" src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg" alt="avatar"/>
            </div>
            
        </div>
    )
}

export default Nav;