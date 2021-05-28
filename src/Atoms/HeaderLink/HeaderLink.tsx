import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderLink.module.scss";

interface Props {
  children: string;
  path: string;
}

const HeaderLink: React.FC<Props> = ({ children, path }) => {
  return (
    <span className={styles.textWrapper}>
      <Link to={path} className={styles.link}>
        {children}
      </Link>
    </span>
  );
};

export default HeaderLink;
