import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer-block">
            <div className="container">
                <div className="nav-block">
                    <div className="social-menu">
                        <a href="https://instagram.com/jakshyjol.kg?igshid=MjkzY2Y1YTY=" className="instagram-item"></a>
                        <a href="https://wa.me/996705265747" className="whatsapp-item"></a>
                        <a href="/" className="telegram-item"></a>
                    </div>
                    <Link to='/' className="logo-footer"></Link>
                    <div className="phone">
                        <span className="phone-icon"></span>
                        <a href="tel:+996552209809" className="first-phone">
                        0552 209 809
                        </a>
                        <a href="tel:+996552209809" className="second-phone">
                        0552 209 809
                        </a>
                    </div>
                </div>               
            </div>
        </footer>
    )
}

export default Footer;