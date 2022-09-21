import { useSelector } from "react-redux";
import { getAuthError} from "redux/Auth/auth-selectors";
import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { AuthForm } from "components/AuthForm/AuthForm";

import { Typography } from "@mui/material";
import css from "./AuthPage.module.css"

const AuthPage = () => {
  const { status, message } = useSelector(getAuthError);
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />
  };

  return (
    <div className={css.pageWrapper}>
      <Typography variant="h5" sx={{marginBottom: '25px'}}>Sign Up Form</Typography>
      <AuthForm />
      {status && alert(`User ${message} is already in use!`)}
    </div>
  );
};

export default AuthPage;