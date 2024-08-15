import { configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./contacts/filtersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
