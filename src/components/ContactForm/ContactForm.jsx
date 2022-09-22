import { useState } from "react";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/Contacts/contacts-selectors";
import { addContact } from "redux/Contacts/contacts-operations";

import { styled, Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import css from "./ContactForm.module.css"



export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [currentName, setCurrentName] = useState('');
  const [openWarning, setOpenWarning] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
        setCurrentName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    };
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const duplicateName = (name) => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(contact => normalizedName === contact.name.toLowerCase());

    return result;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (duplicateName(name)) {
      setOpenWarning(true);
      reset();
      return;
    } else {
      dispatch(addContact(contact));
      setOpenSuccess(true);
      reset();
    }
  };

  return (
    <StyledForm component='form' onSubmit={onSubmit} autoComplete='on'>
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
          id="outlined-required"
          label="Number"
          type="tel"
          name="number"
          value={number}
          onChange={onInputChange}
          size="small"
          required
        />
      </InputWrapper>
      <Button type="submit" variant="contained" color='warning'>Add Contact</Button>
      <Snackbar className={css.snackbar} open={openWarning} autoHideDuration={3000} onClose={() => setOpenWarning(false)} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert severity="error">{currentName} is already in your phonebook.</Alert>
      </Snackbar>
      <Snackbar className={css.snackbar} open={openSuccess} autoHideDuration={3000} onClose={() => setOpenSuccess(false)} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
        <Alert severity="success">{currentName} successfuly added to your phonebook!.</Alert>
      </Snackbar>
    </StyledForm>
  );
}



// MUI Styles:

const StyledForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  padding: '25px 0',
});

const InputWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const StyledInput = styled(TextField)({
  marginBottom: "25px",
});