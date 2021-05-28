import React from "react";

import styles from "./FormButton.module.scss";
interface Props {
  children: string;
  disabled: boolean;
}

const FormButton: React.FC<Props> = ({ children, disabled }) => {
  return (
    <button type="submit" disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
};

export default FormButton;
