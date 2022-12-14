import React, { useEffect, FC } from "react";

import "./news-modal.styles.scss";
import useWindowDimensions from "../Hooks/useWindowDimensions";
/* Framer Motion */
import { motion, AnimatePresence } from "framer-motion";
/* import { ReactComponent as CloseBtn } from "../assets/img/close.svg"; */
const closeBtn: string = require("../assets/img/close.svg").default;

type ANew = {
  id: number;
  img: any;
  title: string;
  category: string;
  alt: string;
};

type Props = {
  setModalActive: (value: boolean) => void;
  modalNews: ANew | undefined;
  modalActive: boolean;
};

const NewsModal: FC<Props> = ({ setModalActive, modalActive, modalNews }) => {
  let newsModalAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, easings: [0, 0.71, 0.2, 1.01] },
    },
    exit: { opacity: 0 },
  };
  let { width } = useWindowDimensions();

  useEffect(() => {
    if (modalActive) {
      if (width > 800) {
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = "12px";
      }
    }
  }, [modalActive]);

  let onExit = () => {
    document.body.style.overflow = "auto";
    document.body.style.paddingRight = "0";
  };
  return (
    <AnimatePresence onExitComplete={onExit}>
      {modalActive ? (
        <motion.div
          className="news-modal"
          key={1}
          variants={newsModalAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            onClick={() => setModalActive(false)}
            className="background-close"
          ></div>
          <div className="news-modal__inner">
            <h2>{modalNews?.title}</h2>
            <div className="journalist">
              <p className="author">By Brandon Ridish</p>
              <p>07/23/2022</p>
            </div>
            <img
              className="news-modal-picture"
              src={modalNews?.img}
              alt={modalNews?.alt}
            />
            <div className="modal-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida dictum fusce ut placerat
                orci. Libero volutpat sed cras ornare arcu dui vivamus arcu. Ut
                morbi tincidunt augue interdum velit euismod in pellentesque
                massa. Aliquam nulla facilisi cras fermentum odio eu feugiat
                pretium. Iaculis nunc sed augue lacus viverra vitae congue eu.
                Vestibulum mattis ullamcorper velit sed ullamcorper morbi
                tincidunt ornare. Maecenas accumsan lacus vel facilisis. Aenean
                sed adipiscing diam donec adipiscing tristique risus nec
                feugiat.
                <br />
                <br />
                Leo vel fringilla est ullamcorper eget nulla facilisi etiam.
                Feugiat vivamus at augue eget. At volutpat diam ut venenatis
                tellus in metus vulputate. In aliquam sem fringilla ut morbi
                tincidunt. Elementum pulvinar etiam non quam lacus suspendisse
                faucibus. Hendrerit dolor magna eget est lorem ipsum. Quam lacus
                suspendisse faucibus interdum posuere lorem ipsum dolor.
                Bibendum est ultricies integer quis auctor elit sed. Est lorem
                ipsum dolor sit amet. Blandit cursus risus at ultrices mi tempus
                imperdiet nulla.
                <br />
                <br />
                Ut diam quam nulla porttitor massa id neque aliquam vestibulum.
                Non blandit massa enim nec dui nunc. Cursus eget nunc
                scelerisque viverra mauris. Faucibus in ornare quam viverra orci
                sagittis eu volutpat. Odio ut sem nulla pharetra.
              </p>
            </div>
            <div
              onClick={() => setModalActive(false)}
              className="modal-close-btn "
            >
              <img src={closeBtn} alt="close"></img>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default NewsModal;
