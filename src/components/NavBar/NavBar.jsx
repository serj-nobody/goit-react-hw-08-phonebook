import { PhoneIphone } from "@mui/icons-material";
import { styled, AppBar, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

import useAuth from "shared/hooks/useAuth";

import { AuthMenu } from "./AuthMenu/AuthMenu";
import { UserMenu } from "./UserMenu/UserMenu";

import css from "./NavBar.module.css";


export const NavBar = () => {
  const isLogin = useAuth();

  return (
    <AppBar position='fixed' sx={{left: '50%', transform: 'translateX(-50%)', maxWidth: '1280px'}}>
      <StyledToolbar>
        <div className={css.wrapper}>
          <StyledLogo variant='h6' sx={{ display: { xs: 'none', sm: 'block' }, marginRight: '16px' }}>PhoneBook</StyledLogo>
          <PhoneIphone sx={{ display: { xs: 'block', sm: 'none' } }} fontSize='large' />
          {isLogin ?
            <div>
              <NavButton component={NavLink} to="/" end color="inherit">Home</NavButton>
              <NavButton component={NavLink} to="/contacts" color="inherit">Contacts</NavButton>
            </div> : 
            <NavButton component={NavLink} to="/" end color="inherit">Home</NavButton>
          }
        </div>
        {isLogin ? <UserMenu /> : <AuthMenu />}
      </StyledToolbar>
    </AppBar>
  );
};


// MUI Styles:

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledLogo = styled(Typography)({
  fontWeight: '700',
});

const NavButton = styled(Button)({
  '&.active': {
    color: '#95d1cc',
  }
});