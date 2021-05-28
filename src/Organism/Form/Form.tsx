import React from "react";

import BigTitle from "Atoms/BigTitle/BigTitle";

import styles from "./Form.module.scss";

interface Props {
  children: any;
}

const Form: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.formElementsWrapper}>
      <BigTitle>Sign In</BigTitle>
      {children}
    </div>
  );
};

export default Form;
