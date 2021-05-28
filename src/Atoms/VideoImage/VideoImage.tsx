import React from "react";

import styles from "./VideoImage.module.scss";

interface Props {
  src: string;
  alt: string;
}

const VideoImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <div className={styles.imgWrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default VideoImage;
