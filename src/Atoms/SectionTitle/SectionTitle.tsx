import React from "react";

import styles from "./SectionTitle.module.scss";

interface Props {
  children: string;
}

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <span className={styles.title}>{children}</span>;
};

export default SectionTitle;
