import { NavLink } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

import { Container, Typography, Link } from "@mui/material";

const HomePage = () => {
  const isLogin = useAuth();

  return (
    <Container sx={{
      paddingTop: { xs: '88px', sm: '96px' },
      paddingLeft: '16px',
      paddingRight: '16px',
      width: '100%',
      textAlign: 'center'
    }}>
      {isLogin ?
        <Typography variant="h5" sx={{marginBottom: '16px'}}>You are already logged in.</Typography>
        : 
        <div>
          <Typography variant="h5" sx={{marginBottom: '16px'}}>Welcome to the PhoneBook App!</Typography>
          <Typography variant="p">Please proceed to <Link component={NavLink} to="/register">Sign Up</Link> form or <Link component={NavLink} to="/login">Login</Link> to your account to browse your contact list.</Typography>
        </div>
      }
    </Container>
  );
};

export default HomePage;