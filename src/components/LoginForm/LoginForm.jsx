import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/Auth/auth-operations";

import css from "./LoginForm.module.css"



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailInputID = nanoid();
  const passwordInputID = nanoid();

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    };
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(loginUser(user));
    reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor={emailInputID}>Email:</label>
        <input
          id={emailInputID}
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
          required
        />
      </div>
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor={passwordInputID}>Password:</label>
        <input
          id={passwordInputID}
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          required
        />
      </div>
      <div className={css.inputGroup}>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}