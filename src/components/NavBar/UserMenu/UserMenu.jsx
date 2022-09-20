import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "redux/Auth/auth-operations";
import { getUserName } from "redux/Auth/auth-selectors";

import css from "./UserMenu.module.css";

export const UserMenu = () => {
  const { name } = useSelector(getUserName);

  const dispatch = useDispatch();

  const onLogout = () => dispatch(logoutUser());

  return (
    <div className={css.wrapper}>
      <span>Hello, {name}</span>
      <button onClick={onLogout} type="button">Log out</button>
    </div>
  );
};