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

const pagination = (data: JSX.Element[], index: number, maxSize: number) => {
  if (data.length < index + maxSize) {
    return data.slice(index, data.length);
  }
  return data.slice(index, index + maxSize);
};

const VideosTemplate: React.FC<Props> = ({ children, maxSize }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const goNext = () => {
    setCurrentIndex((prevState) => prevState + maxSize);
  };
  const goBack = () => {
    setCurrentIndex((prevState) => prevState - maxSize);
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
      <motion.div className={styles.videosWrapper}>
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
