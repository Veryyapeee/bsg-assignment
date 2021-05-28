import React from "react";

import styles from "./PaginationButton.module.scss";

interface Props {
  children: Element | string | React.ReactNode;
  onClick: () => void;
}

const PaginationButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className={styles.paginationBtn}>
      {children}
    </span>
  );
};

export default PaginationButton;
