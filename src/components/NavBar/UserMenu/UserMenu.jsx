import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "redux/Auth/auth-operations";
import { getUserName } from "redux/Auth/auth-selectors";

import { Typography, Button } from "@mui/material";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const { name } = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logoutUser());

  return (
    <div className={css.wrapper}>
      <Typography sx={{fontSize: {xs: '14px', md: '16px'}, display: {xs: 'none', sm: 'block'}}}>Hello, {name}</Typography>
      <Button onClick={onLogout} type="button" variant="contained" color='warning' size='small'>Log out</Button>
    </div>
  );
};