import React from "react"; 
import { useTranslation } from "react-i18next";

import "./sale-block.css";

const SaleBlock = () => {
    const {t} = useTranslation()
    return (
        <div className="sale-block-green">
            <div className="container">
                <div className="sale-block-beige">
                    <div className="book-img"></div>
                    <div className="sale-block-info">
                        <h3 className="sale-info-header">
                        {t("info-header")}
                        </h3>
                        <p className="sale-info-text">{t("info-text")}</p>
                        <p className="sale-info-text">{t("info-text2")}</p>
                        <p className="sale-info-address">
                        {t("info-adress")} <u>Сухе Ботора 26/1</u> {t("info-call")} <u>0552 209 809</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleBlock