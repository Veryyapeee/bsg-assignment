import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Footer from "Organism/Footer/Footer";
import Header from "Organism/Header/Header";

import { loginUserFetch } from "ReduxStore/auth/login";
import { getVideosListFetch } from "ReduxStore/videos/videos";

import HandleFetch from "HOC/HandleFetch";

import styles from "./loginTemplate.module.scss";
import { RootState } from "ReduxStore/store";

interface Props {
  children: JSX.Element[];
}

const LoginTemplate: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.loginUser);
  const videoData = useSelector((state: RootState) => state.getVideosList);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loginUserFetch(localStorage.getItem("userType") || ""));
      dispatch(
        getVideosListFetch({
          MediaListId: 2,
          IncludeCategories: false,
          IncludeImages: true,
          IncludeMedia: false,
          PageNumber: 1,
          PageSize: 15,
        })
      );
    }
  }, [dispatch]); // eslint-disable-line

  return (
    <div className={styles.template}>
      <HandleFetch
        loading={userData.loading || videoData.loading}
        error={userData.error || videoData.error}
        data={userData.data || videoData.data}
      >
        <Header />
        {children}
        <Footer />
      </HandleFetch>
    </div>
  );
};

export default LoginTemplate;
