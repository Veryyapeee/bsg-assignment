import React from "react";
import { Link } from "react-router-dom";

import styles from "./BackToMainPage.module.scss";

interface Props {
  children: string;
  path: string;
}

const BackToMainPage: React.FC<Props> = ({ children, path }) => {
  return (
    <div>
      <Link to={path} className={styles.goBackLink}>
        {children}
      </Link>
    </div>
  );
};

export default BackToMainPage;
