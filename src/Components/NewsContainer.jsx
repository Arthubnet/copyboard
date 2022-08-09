import React, { useEffect } from "react";
import "./news-container.styles.scss";

import NewsColumn from "./NewsColumn";

/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";

function NewsContainer({ container, type, count }) {
  let animateContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 6.5,
        easings: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  /*   let [test, setTest] = useState(); */
  console.log("came to animate");

  return (
    <AnimatePresence exitBeforeEnter>
      {count === container.id ? (
        <motion.div
          key={count}
          variants={animateContainer}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="news__container"
        >
          <img
            alt=""
            src="https://phantom-marca.unidadeditorial.es/aab8aaf75e1d4cea3253886d2f21e5c6/crop/0x0/828x466/resize/1320/f/jpg/assets/multimedia/imagenes/2022/06/14/16552316769449.jpg"
          />
          {/*   {container.data.map((item, index) => (
              <NewsColumn key={index} item={item} />
            ))} */}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default NewsContainer;
