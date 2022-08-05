import React, { useEffect } from "react";
import "./news-container.styles.scss";

import NewsColumn from "./NewsColumn";

/* Framer Motion */
import { motion } from "framer-motion";

function NewsContainer({ newsCategory, type, selectedNews }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: selectedNews === type ? 1 : 0,
        scale: selectedNews === type ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
      className={`${selectedNews === type ? "active" : null} news__container `}
    >
      {newsCategory.data.map((item, index) => (
        <NewsColumn key={index} item={item} />
      ))}
    </motion.div>
  );
}

export default NewsContainer;
