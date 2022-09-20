import { useDispatch } from "react-redux";
import { removeContact } from "redux/Contacts/contacts-operations";

import css from "./ContactItem.module.css"

import PropTypes from 'prop-types';



export const ContactItem = ({contact}) => {
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <li className={css.item}>
      <div className={css.contactWrapper}>
        <span className={css.name}>{contact.name}</span>
        <span>{contact.number}</span>
      </div>
      <button type="button" onClick={() => onRemoveContact(contact.id)}>Delete</button>
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}