import { useSelector } from "react-redux";
import { getAuthError } from "redux/Auth/auth-selectors";
import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { LoginForm } from "components/LoginForm/LoginForm";

import { Typography } from "@mui/material";
import css from "./LoginPage.module.css"

const LoginPage = () => {
  const { status } = useSelector(getAuthError);
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />
  };

  return (
    <div className={css.pageWrapper}>
      <Typography variant="h5" sx={{marginBottom: '25px'}}>Login</Typography>
      <LoginForm />
      {status && alert(`Invalid email or password! Please Try Again.`)}
    </div>
  );
};

export default LoginPage;