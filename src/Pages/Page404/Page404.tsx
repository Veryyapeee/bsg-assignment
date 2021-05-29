import React from "react";
import { useDispatch } from "react-redux";

import Image404 from "Assets/Image404.png";
import BackToMainPage from "Atoms/BackToMainPage/BackToMainPage";

import { logout } from "ReduxStore/auth/login";

import styles from "./Page404.module.scss";

const Page404 = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.pageWrapper}>
      <img src={Image404} alt="Page not found" />
      <BackToMainPage path="/" onClick={() => dispatch(logout())}>
        Go back to the main page
      </BackToMainPage>
    </div>
  );
};

export default Page404;
