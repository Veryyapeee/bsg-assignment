import React from "react";

import Image404 from "Assets/Image404.png";
import BackToMainPage from "Atoms/BackToMainPage/BackToMainPage";

import styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.pageWrapper}>
      <img src={Image404} alt="xd" />
      <BackToMainPage path="/">Go back to the main page</BackToMainPage>
    </div>
  );
};

export default Page404;
