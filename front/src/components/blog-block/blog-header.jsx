import React from "react";
import { useTranslation } from "react-i18next";

import "./blog-block.css";

const BlogHeader = () => {
    const {t} = useTranslation()
    return (
        <div className="container">
        <h2 className="blog-header">{t("blog-header")}</h2>
        </div>
    )
}

export default BlogHeader