import React from "react";

import SectionTitle from "Atoms/SectionTitle/SectionTitle";

import styles from "./Form.module.scss";

interface Props {
  children: any;
}

const Form: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.formElementsWrapper}>
      <SectionTitle>Sign In</SectionTitle>
      {children}
    </div>
  );
};

export default Form;
