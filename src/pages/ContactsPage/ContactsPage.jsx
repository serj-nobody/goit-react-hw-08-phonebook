import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import { Typography } from "@mui/material";
import css from "./ContactsPage.module.css"

const ContactsPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Typography variant="h5">My PhoneBook</Typography>
      <ContactForm />
      {/* <h4 className={css.secodaryTitle}>Contacts</h4> */}
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;