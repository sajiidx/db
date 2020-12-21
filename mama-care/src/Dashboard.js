import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './action/auth'
import Nav from './Nav'
import Product from './Product'
import './Dashboard.css'
import Banner from './Banner'
import Footer from './Footer'
import About from './About'
import Services from './Services'
import OurTeam from './OurTeam'

const Dashboard = ({isLoggedIn, logout}) => {
    return (
        
        <div className="dashboard">
        <Banner />
        <Nav/>

            <div className="content">
            <Link to="/register" style={{display: isLoggedIn ? "none" : "block"}}>Register</Link>
            <Link to="/login" style={{display: isLoggedIn ? "none" : "block"}}>Login</Link>
            {
                isLoggedIn ? (
                    <div>
                        <button onClick={()=>logout()}>
                            Logout
                        </button>
                    </div>
                )
                :
                (
                    <div>
                        <h3>Login to Continue</h3>
                    </div>
                )

            }
            </div>
            <About />
            <Services />
            <OurTeam />
            <div className="main__page">
                <div className="left">
                    <h5>Category</h5>
                </div>
                <Product className="right" title="All Products" fetchUrl="/product" />
            </div>
        <Footer />
        </div>
    )
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
})

export default connect(mapStateToProps,{logout})(Dashboard)
