import React from "react";

import Image404 from "Assets/Image404.png";

import styles from "./Page404.module.scss";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className={styles.pageWrapper}>
      <img src={Image404} alt="xd" />
      <Link to="/" className={styles.goBackLink}>
        Go back to the main page
      </Link>
    </div>
  );
};

export default Page404;
