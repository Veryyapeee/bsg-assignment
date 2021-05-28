import React from "react";

import styles from "./InvalidMessage.module.scss";

interface Props {
  children: string | React.ReactNode;
}

const InvalidMessage: React.FC<Props> = ({ children }) => {
  return <span className={styles.errorMessage}>{children}</span>;
};

export default InvalidMessage;
