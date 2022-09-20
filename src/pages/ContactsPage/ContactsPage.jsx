import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import css from "./ContactsPage.module.css"

const ContactsPage = () => {
  return (
    <div className={css.pageWrapper}>
      <h3 className={css.pageTitle}>My Contact Book</h3>
      <ContactForm />
      <h4 className={css.secodaryTitle}>Contacts</h4>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;