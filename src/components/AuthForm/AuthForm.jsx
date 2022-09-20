import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { signupUser } from "redux/Auth/auth-operations";

import css from "./AuthForm.module.css"



export const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const nameInputID = nanoid();
  const emailInputID = nanoid();
  const passwordInputID = nanoid();

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    setName('');
    setEmail('');
    setPassword('');
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: name,
      email: email,
      password: password,
    };

    dispatch(signupUser(user));
    reset();
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.inputGroup}>
        <label className={css.label} htmlFor={nameInputID}>Name:</label>
        <input
          id={nameInputID}
          type="text"
          name="name"
          value={name}
          onChange={onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
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
        <button type="submit">Register</button>
      </div>
    </form>
  );
}