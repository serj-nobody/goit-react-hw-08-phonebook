import { useDispatch } from "react-redux";
import { removeContact } from "redux/Contacts/contacts-operations";

import { styled, Paper, ListItem, ListItemText, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
// import css from "./ContactItem.module.css"

import PropTypes from 'prop-types';



export const ContactItem = ({contact}) => {
  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  return (
    <StyledListItem>
      <StyledCard elevation={3}>
        <ListItemText primary={contact.name} secondary={contact.number} />
        <IconButton edge="end" aria-label="delete" onClick={() => onRemoveContact(contact.id)}>
          <Delete sx={{ color: '#ef5350' }} />
        </IconButton>
      </StyledCard>
    </StyledListItem>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
}


// MUI Styles:

const StyledListItem = styled(ListItem)({
  width: '100%',
  maxWidth: '380px',
});

const StyledCard = styled(Paper)({
  display: 'flex',
  padding: '10px 25px',
  width: '100%',
  backgroundColor: '#f5f5f5',
});