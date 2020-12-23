import React from 'react'
import './OurTeam.css'
import './bootstrap.css'
import Abbas from './images/abbas1.png';
import Mudassir from './images/mud1.jpg';
import Sajid from './images/sajid1.jpg';
function OurTeam(){
    return(
        <section id="team">
            <div className="container">
                <h1 className="ourteam">Our Team</h1>
                <div className="row">
                    <div  className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Abbas} className="img-responsive"/>
                            <ul>
                                <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                <a href="#"><li><i className="fa fa-instagram"></i></li></a>
                            </ul>
                        </div>
                        <h2>Abbas Hunaid</h2>
                        <h3>Front-End Developer</h3>
                        <p>kuch bhi likhdo yahan abhi ke liye</p>
                    </div>
                    <div className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Mudassir} className="img-responsive"/>
                            <ul>
                                <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                <a href="#"><li><i className="fa fa-instagram"></i></li></a>
                            </ul>
                        </div>
                        <h2>Mudassir Saeed</h2>
                        <h3>Back-End Developer</h3>
                        <p>kuch bhi likhdo yahan abhi ke liye</p>
                    </div>
                    <div className="col-md-4 profile-pic text-center">
                        <div className="img-box">
                            <img src={Sajid} style={{height: "260px"}} className="img-responsive sajid"/>
                            <ul>
                                <a href="#"><li><i className="fa fa-facebook"></i></li></a>
                                <a href="#"><li><i className="fa fa-twitter"></i></li></a>
                                <a href="#"><li><i className="fa fa-instagram"></i></li></a>
                            </ul>
                        </div>
                        <h2>Sajid Ali</h2>
                        <h3>DataBase Adminstrator</h3>
                        <p>kuch bhi likhdo yahan abhi ke liye</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam