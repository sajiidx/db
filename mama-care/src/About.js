import React from 'react'
import "./About.css"
import "./bootstrap.css"
function About(){
    return(
        <section id="about">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="ourteam">About US</h2>
                    <div className="about-content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Alias vel, quae iste soluta reiciendis, possimus ut voluptatum animi consectetur
                        , impedit voluptates. Sed ad libero assumenda voluptate nostrum labore accusantium ipsum.
                    </div>
                    <button type="button" className="btn btn-primary">Read More</button>
                </div>
                <div className="col-md-6 skills-bar">
                    <p>Web Development</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "80%" }} >80%</div>
                    </div>
                    <p>REACT JS</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "88%"}}>85%</div>
                    </div>
                    <p>WordPress</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "75%"}}>75%</div>
                    </div>
                    <p>Mern Stack</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width: "50%"}}>40%</div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About