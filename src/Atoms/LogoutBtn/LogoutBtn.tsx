import React from "react";

import styles from "./LogoutBtn.module.scss";

interface Props {
  children: any;
  onClick?: () => void;
}

const LogoutBtn: React.FC<Props> = ({ children, onClick }) => {
  return (
    <span onClick={onClick} className={styles.logOut}>
      {children}
    </span>
  );
};

export default LogoutBtn;
