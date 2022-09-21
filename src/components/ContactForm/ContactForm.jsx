import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "redux/Contacts/contacts-operations";

import { styled, Box, TextField, Button } from "@mui/material";
// import css from "./ContactForm.module.css"



export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const nameInputID = nanoid();
  // const numberInputID = nanoid();

  const dispatch = useDispatch();

  const onInputChange = (event) => {
    const { name, value } = event.currentTarget;
    
    switch (name) {
      case 'name':
        setName(value);
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

  const onSubmit = (event) => {
    event.preventDefault();

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(contact));
    reset();
  };

  return (
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
    </StyledForm>

    // <form className={css.form} onSubmit={onSubmit}>
    //   <div className={css.inputGroup}>
    //     <label className={css.label} htmlFor={nameInputID}>Name:</label>
    //     <input
    //       id={nameInputID}
    //       type="text"
    //       name="name"
    //       value={name}
    //       onChange={onInputChange}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </div>
    //   <div className={css.inputGroup}>
    //     <label className={css.label} htmlFor={numberInputID}>Number:</label>
    //     <input
    //       id={numberInputID}
    //       type="tel"
    //       name="number"
    //       value={number}
    //       onChange={onInputChange}
    //       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </div>
      
    //   <button type="submit">Add contact</button>
    // </form>
  );
}



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