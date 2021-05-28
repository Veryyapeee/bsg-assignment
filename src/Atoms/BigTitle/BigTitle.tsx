import React from "react";

import styles from "./BigTitle.module.scss";

interface Props {
  children: string;
}

const BigTitle: React.FC<Props> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default BigTitle;
