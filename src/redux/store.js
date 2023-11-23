import { configureStore } from '@reduxjs/toolkit';
import { formSearchSlice } from './reducer/formSearchSlice';

export const store = configureStore({
   reducer: {
      formSearch: formSearchSlice.reducer,
   },
});
