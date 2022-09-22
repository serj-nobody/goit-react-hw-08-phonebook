import { useState } from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "redux/Auth/auth-operations";

import { styled, Box, TextField, Button } from "@mui/material";
// import css from "./LoginForm.module.css"



export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div>
      <StyledForm component='form' onSubmit={onSubmit} autoComplete='on'>
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
        <Button type="submit" variant="contained" color='warning' sx={{ marginBottom: '25px' }}>Login</Button>
      </StyledForm>
    </div>
  );
}

// MUI Styles:

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