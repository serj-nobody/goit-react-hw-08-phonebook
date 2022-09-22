import { useState } from "react";

import { useDispatch } from "react-redux";
import { signupUser } from "redux/Auth/auth-operations";

import { styled, Box, TextField, Button } from "@mui/material";
// import css from "./AuthForm.module.css"


export const AuthForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { status, message } = useSelector(getAuthError);

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
    <div>
      <StyledForm component='form' onSubmit={onSubmit} autoComplete='off'>
        <InputWrapper>
          <StyledInput
            id="outlined-required"
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            size="small"
            required
          />
          <StyledInput
            id="outlined"
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
        <Button type="submit" variant="contained" color='warning' sx={{ marginBottom: '25px' }}>Register</Button>
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