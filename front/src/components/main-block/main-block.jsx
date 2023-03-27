import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Header from "../header/header";

import "./main-block.css";

const MainBlock = () => {

    const {t} = useTranslation()

    return (
        <div className="main-block-background">
            <Header />
            <div className="container">
                <div className="main-block">
                    <div className="main-block-car-bg">
                        <div className="main-block-car-img"></div>
                    </div>
                    <h2 className="main-block-header">
                        {t("text")}
                    </h2>
                    <h3 className="main-block-subheader">
                        {t("subheader")}
                    </h3>
                    <p className="main-block-consultation">
                        {t("consultation")}
                    </p>
                    <div className="main-block-contact">
                        <a href='https://wa.me/996705265747' className="main-block-whatsapp">
                            <span className="main-block-whatsapp-icon"></span>
                            WhatsApp
                        </a>
                        <a href="tel:+996552209809" className="main-block-phone">
                            <span className="main-block-phone-icon"></span>
                                0552 209 809
                        </a>
                    </div>
                    <div className="main-block-footer">
                        <div className="main-block-work-time">
                            <div className="main-block-work-time-graph">
                                <span className="main-block-work-time-graph-icon"></span>
                                {t("timegraph")}
                            </div>
                            <div className="main-block-work-time-text">
                            ПН-ВС; 09:00-18:00
                            </div>
                        </div>
                        <a href='Mailto:ruslanjakshylykov@gmail.com' className="main-block-gmail">
                            <span className="main-block-gmail-icon"></span>
                            ruslanjakshylykov@gmail.com
                        </a>

                    </div>
                    
                </div>  
            </div>
            
        </div>
    )
}

export default MainBlock