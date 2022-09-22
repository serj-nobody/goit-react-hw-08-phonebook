import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { LoginForm } from "components/LoginForm/LoginForm";

import { Container, Typography } from "@mui/material";
// import css from "./LoginPage.module.css"

const LoginPage = () => {
  const isLogin = useAuth();

  if (isLogin) {
    return <Navigate to="/contacts" />
  };

  return (
    <Container sx={{
      paddingTop: { xs: '88px', sm: '96px' },
      paddingLeft: '16px',
      paddingRight: '16px',
      width: '100%',
      textAlign: 'center'
    }}>
      <Typography variant="h5" sx={{marginBottom: '25px'}}>Login</Typography>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;