import React from "react";

import styles from "./VideoCard.module.scss";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const VideoCard: React.FC<Props> = ({ children }) => {
  return <div className={styles.cardWrapper}>{children}</div>;
};

export default VideoCard;
