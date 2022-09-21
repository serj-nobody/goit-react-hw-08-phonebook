// import { Aod, PhoneIphone } from "@mui/icons-material";
import { styled, AppBar, Toolbar, Typography } from "@mui/material";
// import { Link } from "react-router-dom";

import useAuth from "shared/hooks/useAuth";

import { AuthMenu } from "./AuthMenu/AuthMenu";
import { UserMenu } from "./UserMenu/UserMenu";

// import css from "./NavBar.module.css";


export const NavBar = () => {
  const isLogin = useAuth();

  return (
    <AppBar position='static'>
      <StyledToolbar>
        <StyledLogo variant='h6'>Phone<Typography variant='h6' component="span">Book</Typography></StyledLogo>
        { isLogin ? <UserMenu /> : <AuthMenu /> }
      </StyledToolbar>
    </AppBar>
      
    // <div className={css.wrapper}>
    //   <Link className={css.link} to="/">Phonebook</Link>
    // {isLogin ? <UserMenu /> : <AuthMenu />}
    // </div>
  );
};



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledLogo = styled(Typography)({
  fontWeight: '700',
});