import React from "react";

import styles from "./VideoTitle.module.scss";

interface Props {
  children: string;
}

const VideoTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.titleWrapper}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default VideoTitle;
