import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./header.css"

const Header = () => {

    const {i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return (
        <div className="container">
            <div className="header-block">
                <Link to ='/' className="logo-block">
                    <span className="logo"></span>
                    <span className="logo-text"></span>
                </Link>
                <div className="social-header-block">
                    <a href="https://instagram.com/jakshyjol.kg?igshid=MjkzY2Y1YTY=" className="instagram-item"></a>
                    <a href="https://wa.me/996705265747" className="whatsapp-item"></a>
                    <a href="/" className="telegram-item"></a>
                    <Link to="/" className="lang">
                        <div className="lang-menu">
                            <button onClick={() => changeLanguage('kg')} className="lang-menu-item">Кыргызский</button>
                            <button onClick={() => changeLanguage('ru')} className="lang-menu-item">Русский</button>
                        </div>
                    </Link>

                    <a href='http://127.0.0.1:8000/admin/' className="admin"></a>
                </div>              
            </div>
        </div>
    )
}

export default Header