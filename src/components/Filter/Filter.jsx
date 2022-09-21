// import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "redux/Filter/filter-slice";

import { styled, TextField } from "@mui/material";
// import css from "./Filter.module.css"



// const filterInputID = nanoid();

export const Filter = () => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onFilterContacts = ({target}) => {
    const action = filterContacts(target.value);
    dispatch(action);
  }

  return (
    <div style={{display: 'flex', justifyContent: 'center', width: '100%', padding: '10px 0', marginBottom: '25px', backgroundColor: '#f5f5f5',}}>
      <StyledInput
        id="outlined"
        label="Search"
        type="text"
        name="name"
        value={filter}
        onChange={onFilterContacts}
        size="small"
      />
    </div>

    
    // <div className={css.filterContainer}>
    //   <label className={css.label} htmlFor={filterInputID}>Find contact by name:</label>
    //   <input
    //     id={filterInputID}
    //     type="text"
    //     name="name"
    //     value={filter}
    //     onChange={onFilterContacts}
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //   />
    // </div>
  );
}

const StyledInput = styled(TextField)({
  backgroundColor: "#fff",
});