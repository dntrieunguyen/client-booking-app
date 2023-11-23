import { configureStore } from '@reduxjs/toolkit';
import { formSearchSlice } from '../components/searchPopUp/formSearchSlice';

export const store = configureStore({
   reducer: {
      formSearch: formSearchSlice.reducer,
   },
});
