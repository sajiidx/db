import React from 'react'
import './Testimonial.css'
import './bootstrap.css'
import five from './images/five.jpg'
import three from './images/three.jpg'
import four from './images/four.jpg'
import seven from './images/seven.jpg'
function Testimonial(){
    return(
        <section id="testimonials">
            <div className="container">
            <h1 className="ourteam">Testimonials</h1>
            <div className="row">
            <div id="column" className="col-md-3 text-center">
                <div className="profile">
                <img src={five} className="user"/>
                <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque</blockquote>
                    <h3>KIARA ADVANI <span>Dehli,India</span></h3>
                </div>
            </div>
            <div id="column" className="col-md-3 text-center"/>
                <div className="profile">
                <img src={three} className="user"/>
                <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque </blockquote>
                    <h3>GAL GADOT <span>Canada,USA</span></h3>
                </div>
            </div>
            <div id="column" className="col-md-3 text-center">
                <div className="profile">
                <img src={four} className="user"/>
                <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque </blockquote>
                    <h3>PETER PARKER<span>Newyork,LA</span></h3>
                </div>
            </div>
            <div id="column" className="col-md-3 text-center">
                <div className="profile">
                <img src={seven} className="user"/>
                <blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos sit amet consectetur adipisicing elit. Eos eum quo amet ad 
                    ipsa dignissimos esse cumque vero ducimus neque</blockquote>
                    <h3>SOONG JOOONG KI <span>Seoul,Korea</span></h3>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Testimonial