import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

import styles from "./HandleFetch.module.scss";
interface Props {
  children: any;
  loading: boolean;
  error: Error | null;
  data: any;
}

const HandleFetch: React.FC<Props> = ({ children, loading, error, data }) => {
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return (
      <div className={styles.loader}>
        <ClipLoader loading={loading} size={150} />
      </div>
    );
  }
  if (!data) {
    <div>No data provided</div>;
  }
  if (data) {
    return children;
  }
};

export default HandleFetch;
