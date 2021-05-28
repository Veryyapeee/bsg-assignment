import React from "react";

import styles from "./BlackBigText.module.scss";

interface Props {
  children: string;
}

const BlackBigText: React.FC<Props> = ({ children }) => {
  return <span className={styles.errText}>{children}</span>;
};

export default BlackBigText;
