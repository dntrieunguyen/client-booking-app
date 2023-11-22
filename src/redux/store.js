import { configureStore } from '@reduxjs/toolkit';
import { dateSlice } from './reducer/dateSlice';
import { amountSlice } from './reducer/amountSlice';

export const store = configureStore({
   reducer: {
      datePick: dateSlice.reducer,
      amountPick: amountSlice.reducer,
   },
});
