import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import BlackText from "Atoms/BlackText/BlackText";
import LogoutBtn from "Atoms/LogoutBtn/LogoutBtn";

import { RootState } from "ReduxStore/store";

import { logoutAction } from "ReduxStore/auth/login";

import styles from "./Header.module.scss";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.loginUser);

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <header className={styles.header}>
      <BlackText>{loggedUser.data.User.FullName}</BlackText>
      <LogoutBtn onClick={() => logout()}>Sign Out</LogoutBtn>
    </header>
  );
};

export default Header;
