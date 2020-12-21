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
                            <li className="facebook"><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><img src="./icons/facebook.svg" alt="facebook"/></a></li>
                            <li className="instagram"><a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><img src="./icons/facebook.svg" alt="instagram"/></a></li>
                            <li className="twitter"><a href="https://www.twitter.com/" rel="noreferrer" target="_blank"><img src="./icons/facebook.svg" alt="twitter"/></a></li>
                            <li className="youtube"><a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><img src="./icons/facebook.svg" alt="youtube"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-shop-guide">
                    <h5>Shop Guide</h5>
                    <ul>
                        <li><a href="/orderprocess">Order Process</a></li>
                        <li><a href="/feedback">Feedback/Complaint Form</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/delivery">Delivery</a></li>
                        <li><a href="/refundpolicy">Returns</a></li>
                        <li><a href="termsandconditions">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-aboutus">
                    <h5>About Us</h5>
                    <ul>
                        <li><a href="/contactus">Contact Us</a></li>
                        <li><a href="/faq">FAQ's</a></li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/stores">Stores</a></li>
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
