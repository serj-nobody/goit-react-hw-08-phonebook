import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/Contacts/contacts-operations";

import { ContactItem } from "components/ContactItem/ContactItem";

import { motion, AnimatePresence } from "framer-motion"



export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterResults = () => {
  const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }

  const filterResults = getFilterResults();

  return (
    <ul style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <AnimatePresence>
        {filterResults.map(contact => (
          <motion.li
            key={contact.id}
            layout
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
            style={{display: 'flex', justifyContent: 'center', width: '100%', margin: '0 auto'}}
          >
            <ContactItem contact={contact} />
          </motion.li>
        ))};
      </AnimatePresence>
    </ul>
  );
}