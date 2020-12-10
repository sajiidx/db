import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-extra"></div>
            <div className="footer-top">
                <div className="about-us-details">
                    <div className="logo-className">
                        <h4>Mama's Care</h4>
                    </div>
                    <div className="social-media-links">
                        <ul>
                            <li className="facebook"><a href="https://www.facebook.com/" target="_blank"><img src="./icons/facebook.svg" alt="facebook"/></a></li>
                            <li className="instagram"><a href="https://www.instagram.com/" target="_blank"><img src="./icons/facebook.svg" alt="instagram"/></a></li>
                            <li className="twitter"><a href="https://www.twitter.com/" target="_blank"><img src="./icons/facebook.svg" alt="twitter"/></a></li>
                            <li className="youtube"><a href="https://www.youtube.com/" target="_blank"><img src="./icons/facebook.svg" alt="youtube"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-shop-guide">
                    <h5>Shop Guide</h5>
                    <ul>
                        <li><a href="#">Order Process</a></li>
                        <li><a href="#">Feedback/Complaint Form</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-aboutus">
                    <h5>About Us</h5>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">FAQ's</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Stores</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2020 by Team Neutral. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer
