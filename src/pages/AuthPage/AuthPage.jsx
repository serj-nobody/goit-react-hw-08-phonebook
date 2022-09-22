import { Navigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { AuthForm } from "components/AuthForm/AuthForm";

import { Container, Typography } from "@mui/material";
// import css from "./AuthPage.module.css"

const AuthPage = () => {
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
      <Typography variant="h5" sx={{marginBottom: '25px'}}>Sign Up Form</Typography>
      <AuthForm />
    </Container>
  );
};

export default AuthPage;