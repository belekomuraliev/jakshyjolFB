import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./test-block.css"

const TestBlock = () => {
    const {t} = useTranslation()
    return (
        <div className="test-block">
            <div className="container">
                <div className="trafficlight-wrap">
                <span className="trafficlight"></span>
                </div>
                <h2 className="test-block-header">
                    Жакшы Жол 
                </h2>
                <h2 className="test-block-subheader">
                {t("test-subheader")}
                </h2>
                <div className="test-card-practice">
                    <div className="test-card-practice-img"></div>
                    <div className="test-card-practice-block">
                        <h3 className="test-card-practice-header">
                        {t("practice-subheader")}
                        </h3>
                        <p className="test-card-practice-text">{t("practice-text")} </p>
                        <p className="test-card-practice-text">{t("practice-text2")}</p>
                    </div>
                </div>
                <div className="test-card-task">
                    <div className="test-card-task-img"></div>
                    <div className="test-card-task-block">
                        <h3 className="test-card-task-header">
                            {t("task-header")}
                        </h3>
                        <p className="test-card-task-text">
                        {t("task-text")}
                        </p>
                        <Link to='/test' className="pass-the-test">
                        {t("test-button")}
                        </Link>
                    </div>
                </div>
                <div className="road">
                    <span className="road-img"></span>
                </div>
            </div>
        </div>
    )
}

export default TestBlock;