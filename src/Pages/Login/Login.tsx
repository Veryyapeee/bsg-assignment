import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useForm from "Hooks/useForm";

import GreyText from "Atoms/GreyText/GreyText";
import Form from "Organism/Form/Form";

import FormStructure from "Form/Form/Form";

import { RootState } from "ReduxStore/store";
import { loginUserFetch } from "ReduxStore/auth/login";
import HandleFetch from "HOC/HandleFetch";

import { InputType, UserType } from "Utils/enums";
import styles from "./Login.module.scss";

import Camera from "Assets/camera.png";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loginData = useSelector((state: RootState) => state.loginUser);

  useEffect(() => {
    if (loginData.success) {
      history.push("/logged/videos");
    }
  }, [loginData.success, history]);

  const [form, setForm, dataForm] = useForm({
    Username: {
      val: "",
      type: InputType.TEXT,
      inputType: InputType.INPUT,
      placeholder: "E-mail",
      label: "E-mail",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 50,
      },
      touched: false,
      valid: false,
    },
    Password: {
      val: "",
      type: InputType.PASSWORD,
      inputType: InputType.INPUT,
      placeholder: "********",
      label: "Password",
      validation: {
        required: true,
        minLength: 8,
        maxLength: 50,
        passwordComplexity: true,
      },
      touched: false,
      valid: false,
    },
  });

  const login = (userType: string) => {
    dispatch(loginUserFetch(userType, { Username: "", Password: "" }));
  };

  const test = () => {
    console.log(dataForm);
  };
  return (
    <div className={styles.mainWrapper}>
      <img src={Camera} alt="Old camera" className={styles.cameraImg} />
      <HandleFetch
        loading={loginData.loading}
        error={loginData.error}
        data={loginData.data}
      >
        <Form>
          <FormStructure
            config={form}
            setConfig={setForm}
            buttonTitle={"SIGN IN"}
            onSubmit={test}
          />
          <GreyText onClick={() => login(UserType.ANONYM)}>
            Or login as Anonymous User
          </GreyText>
        </Form>
      </HandleFetch>
    </div>
  );
};

export default Login;
