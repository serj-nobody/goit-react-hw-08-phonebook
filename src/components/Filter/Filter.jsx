import { useSelector, useDispatch } from "react-redux";
import { filterContacts } from "redux/Filter/filter-slice";

import { styled, TextField } from "@mui/material";
// import css from "./Filter.module.css"



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
  );
}

const StyledInput = styled(TextField)({
  backgroundColor: "#fff",
});