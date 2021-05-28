import React from "react";

import styles from "./VideoDescription.module.scss";

interface Props {
  children: string;
}

const VideoDescription: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.descWrapper} style={{ textAlign: "right" }}>
      {children}
    </div>
  );
};

export default VideoDescription;
