import { useState } from "react";
// import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { loginUser } from "redux/Auth/auth-operations";

import { styled, Box, TextField, Button } from "@mui/material";
// import css from "./LoginForm.module.css"



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const emailInputID = nanoid();
  // const passwordInputID = nanoid();

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
    <StyledForm component='form' onSubmit={onSubmit} autoComplete='off'>
      <InputWrapper>
        <StyledInput
          id="outlined-required"
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={onInputChange}
          size="small"
          required
        />
        <StyledInput
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
          size="small"
          required
        />
      </InputWrapper>
      <Button type="submit" variant="contained" color='warning'>Login</Button>
    </StyledForm>

    // <form className={css.form} onSubmit={onSubmit}>
    //   <div className={css.inputGroup}>
    //     <label className={css.label} htmlFor={emailInputID}>Email:</label>
    //     <input
    //       id={emailInputID}
    //       type="email"
    //       name="email"
    //       value={email}
    //       onChange={onInputChange}
    //       required
    //     />
    //   </div>
    //   <div className={css.inputGroup}>
    //     <label className={css.label} htmlFor={passwordInputID}>Password:</label>
    //     <input
    //       id={passwordInputID}
    //       type="password"
    //       name="password"
    //       value={password}
    //       onChange={onInputChange}
    //       required
    //     />
    //   </div>
    //   <div className={css.inputGroup}>
    //     <button type="submit">Login</button>
    //   </div>
    // </form>
  );
}



const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
});

const InputWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const StyledInput = styled(TextField)({
  marginBottom: "25px",
});