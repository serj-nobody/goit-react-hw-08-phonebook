import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import { Box, Typography } from "@mui/material";
// import css from "./ContactsPage.module.css"

const ContactsPage = () => {
  return (
    <Box sx={{ paddingTop: { xs: '88px', sm: '96px'}, width: '100%', textAlign: 'center'}}>
      <Typography variant="h5">My PhoneBook</Typography>
      <ContactForm />
      <Filter />
      <ContactList />
    </Box>
  );
};

export default ContactsPage;