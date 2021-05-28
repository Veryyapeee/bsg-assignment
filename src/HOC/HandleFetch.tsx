import React from "react";
import { useDispatch } from "react-redux";

import BackToMainPage from "Atoms/BackToMainPage/BackToMainPage";
import Splash from "Pages/Splash/Splash";

import { logout } from "ReduxStore/auth/login";

import styles from "./HandleFetch.module.scss";
import BlackBigText from "Atoms/BlackBigText/BlackBigText";
interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
  status?: number;
}

const HandleFetch: React.FC<Props> = ({
  children,
  loading,
  error,
  data,
  status,
}) => {
  const dispatch = useDispatch();
  if (error || !data || status === 204) {
    return (
      <div className={styles.error}>
        <BlackBigText>Ooops, something went wrong...</BlackBigText>
        <BackToMainPage path="/" onClick={() => dispatch(logout())}>
          Go back to the main page
        </BackToMainPage>
      </div>
    );
  }
  if (loading) {
    return <Splash loading={loading} />;
  }
  if (data) {
    return children;
  }
};

export default HandleFetch;
