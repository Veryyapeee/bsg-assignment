import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import HeaderLink from "Atoms/HeaderLink/HeaderLink";
import LogoutBtn from "Atoms/LogoutBtn/LogoutBtn";

import { logoutAction } from "ReduxStore/auth/login";

import styles from "./Header.module.scss";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <header className={styles.header}>
      <HeaderLink path="/logged/videos">HOME</HeaderLink>
      <LogoutBtn onClick={() => logout()}>Sign Out</LogoutBtn>
    </header>
  );
};

export default Header;
