import React, { useState } from "react";

import { motion } from "framer-motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PaginationButton from "Atoms/PaginationButton/PaginationButton";

import styles from "./VideosTemplate.module.scss";

interface Props {
  children: any;
  maxSize: number;
}

library.add(faAngleRight, faAngleLeft);

// Variants for animation
const variants = {
  open: { x: 0, opacity: 1, transition: { stiffness: 200 } },
  closedRight: { x: "-100%", opacity: 0 },
  closedLeft: { x: "100%", opacity: 0 },
};

// Pagination function
const pagination = (data: JSX.Element[], index: number, maxSize: number) => {
  if (data.length < index + maxSize) {
    return data.slice(index, data.length);
  }
  return data.slice(index, index + maxSize);
};

const VideosTemplate: React.FC<Props> = ({ children, maxSize }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);
  const goNext = () => {
    setCurrentIndex((prevState) => prevState + maxSize);
    setSwipeLeft(true);
    setTimeout(() => {
      setSwipeLeft(false);
    }, 200);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - maxSize);
    setSwipeRight(true);
    setTimeout(() => {
      setSwipeRight(false);
    }, 200);
  };
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.btnLeft}>
        {currentIndex !== 0 && (
          <PaginationButton onClick={goBack}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </PaginationButton>
        )}
      </div>
      <motion.div
        className={styles.videosWrapper}
        variants={variants}
        animate={swipeLeft ? "closedLeft" : swipeRight ? "closedRight" : "open"}
        style={{
          visibility: swipeLeft || swipeRight ? "hidden" : "visible",
        }}
      >
        {pagination(children, currentIndex, maxSize)}
      </motion.div>
      <div className={styles.btnRight}>
        {currentIndex < children.length - maxSize && (
          <PaginationButton onClick={goNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </PaginationButton>
        )}
      </div>
    </div>
  );
};

export default VideosTemplate;
