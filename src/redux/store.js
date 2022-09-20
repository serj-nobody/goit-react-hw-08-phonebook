import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./Auth/auth-slice";
import contactsReducer from "./Contacts/contacts-slice";
import filterReducer from "./Filter/filter-slice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});