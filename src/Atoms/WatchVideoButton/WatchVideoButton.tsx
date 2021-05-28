import React from "react";
import { Link } from "react-router-dom";

import styles from "./WatchVideoButton.module.scss";

interface Props {
  children: string | React.ReactNode;
  path: string;
}

const WatchVideoButton: React.FC<Props> = ({ children, path }) => {
  return (
    <div className={styles.btnWrapper}>
      <Link to={path} className={styles.redirectButton}>
        {children}
      </Link>
    </div>
  );
};

export default WatchVideoButton;
