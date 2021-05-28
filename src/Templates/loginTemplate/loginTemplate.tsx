import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "Organism/Header/Header";

import { loginUserFetch } from "ReduxStore/auth/login";
import { getVideosListFetch } from "ReduxStore/videos/videos";

import HandleFetch from "HOC/HandleFetch";

import styles from "./loginTemplate.module.scss";
import { RootState } from "ReduxStore/store";

interface Props {
  children: JSX.Element[] | JSX.Element;
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
          MediaListId: 2, //Or 4,5 for other data
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
        status={videoData.status}
      >
        <Header />
        {children}
      </HandleFetch>
    </div>
  );
};

export default LoginTemplate;
