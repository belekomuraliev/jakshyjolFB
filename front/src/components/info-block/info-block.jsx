import React from "react";
import { useTranslation } from "react-i18next";

import './info-block.css';

const InfoBlock = () => {
    const {t} = useTranslation()
    return (
        <div className="container">
            <div className="card-block">
                <div className="card-item">
                    <div className="card-bg">
                        <span className="client-logo"></span>
                    </div>
                    <p className="card-text">{t("1000")}</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="work-logo"></span>
                    </div>
                    <p className="card-text">{t("25")}</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="driver-logo"></span>
                    </div>
                    <p className="card-text">{t("hours")}</p>
                </div>
                <div className="card-item">
                    <div className="card-bg">
                        <span className="time-logo"></span>
                    </div>
                    <p className="card-text">{t("study-time")}</p>
                </div>
            </div>
            <div className="line"></div>
            <div className="about-block">
                <div className="photo"></div>
                <div className="about-info-block">
                    <h2 className="about-info-name">
                    {t("info-name")}
                    </h2>
                    <p className="about-info-experience">
                    {t("info-experience")}
                    </p>
                    <p className="about-info-text">
                    {t("info-biography")}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;