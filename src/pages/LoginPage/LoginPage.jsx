import { useSelector } from "react-redux";
import { getAuthError } from "redux/Auth/auth-selectors";
import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { LoginForm } from "components/LoginForm/LoginForm";

import css from "./LoginPage.module.css"

const LoginPage = () => {
  const { status } = useSelector(getAuthError);
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />
  };

  return (
    <div className={css.pageWrapper}>
      <h3 className={css.pageTitle}>Login Page</h3>
      <LoginForm />
      {status && alert(`Invalid email or password! Please Try Again.`)}
    </div>
  );
};

export default LoginPage;