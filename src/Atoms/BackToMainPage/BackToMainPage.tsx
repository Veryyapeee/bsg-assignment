import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackToMainPage.module.scss";

interface Props {
  children: string;
  path: string;
  onClick?: () => void;
}

const BackToMainPage: React.FC<Props> = ({ children, path, onClick }) => {
  return (
    <div>
      <Link to={path} className={styles.goBackLink} onClick={onClick}>
        {children}
      </Link>
    </div>
  );
};

export default BackToMainPage;
