import React from "react";

import styles from "./BlackText.module.scss";

interface Props {
  children: string;
}

const BlackText: React.FC<Props> = ({ children }) => {
  return <span className={styles.text}>{children}</span>;
};

export default BlackText;
