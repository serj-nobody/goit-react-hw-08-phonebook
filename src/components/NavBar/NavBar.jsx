// import { Aod, PhoneIphone } from "@mui/icons-material";
// import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import useAuth from "shared/hooks/useAuth";

import { AuthMenu } from "./AuthMenu/AuthMenu";
import { UserMenu } from "./UserMenu/UserMenu";

import css from "./NavBar.module.css";


export const NavBar = () => {
  const isLogin = useAuth();

  return (
    <div className={css.wrapper}>
      <Link className={css.link} to="/">Phonebook</Link>
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </div>
  );
};