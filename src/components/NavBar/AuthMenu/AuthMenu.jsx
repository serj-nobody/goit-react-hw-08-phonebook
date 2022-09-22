import { NavLink } from "react-router-dom";

import { styled, Button } from "@mui/material";
// import css from "./AuthMenu.module.css";

export const AuthMenu = () => {
  return (
    <div>
      <NavButton component={NavLink} to="/register" color="inherit">Sign Up</NavButton>
      <NavButton component={NavLink} to="/login" color="inherit">Login</NavButton>
    </div>
  );
};



const NavButton = styled(Button)({
  '&.active': {
    color: '#ff9800',
  }
});