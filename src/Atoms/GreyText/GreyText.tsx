import React from "react";

import styles from "./GreyText.module.scss";

interface Props {
  children: string;
  onClick?: () => void;
}

const GreyText: React.FC<Props> = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className={styles.text}>
      {children}
    </span>
  );
};

export default GreyText;
