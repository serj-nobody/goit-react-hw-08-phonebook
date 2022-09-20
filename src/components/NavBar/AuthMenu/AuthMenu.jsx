import { NavLink } from "react-router-dom";

import css from "./AuthMenu.module.css";

export const AuthMenu = () => {
  return (
    <div className={css.wrapper}>
      <NavLink className={css.link} to="/register">Sign Up</NavLink>
      |
      <NavLink className={css.link} to="/login">Login</NavLink>
    </div>
  );
};