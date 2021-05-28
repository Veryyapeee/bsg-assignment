import React from "react";

import ClipLoader from "react-spinners/ClipLoader";
import BackToMainPage from "Atoms/BackToMainPage/BackToMainPage";

import styles from "./HandleFetch.module.scss";
interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
}

const HandleFetch: React.FC<Props> = ({ children, loading, error, data }) => {
  if (error || !data) {
    return (
      <div className={styles.error}>
        <div className={styles.innerError}>
          <span className={styles.errText}>Ooops, something went wrong...</span>
          <BackToMainPage path="/">Go back to the main page</BackToMainPage>
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className={styles.loader}>
        <ClipLoader loading={loading} size={150} />
      </div>
    );
  }
  if (data) {
    return children;
  }
};

export default HandleFetch;
