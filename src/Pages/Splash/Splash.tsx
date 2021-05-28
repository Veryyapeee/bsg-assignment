import React from "react";

import ClipLoader from "react-spinners/ClipLoader";

import styles from "./Splash.module.scss";

interface Props {
  loading?: boolean;
}

const Splash: React.FC<Props> = ({ loading }) => {
  return (
    <div className={styles.loader}>
      <ClipLoader loading={loading ? loading : true} size={150} />
    </div>
  );
};

export default Splash;
