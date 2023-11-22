import { createSlice } from '@reduxjs/toolkit';

export const amountSlice = createSlice({
   name: 'AMOUNT_BOOK',
   initialState: {
      adult: 0,
      children: 0,
      rooms: 0,
   },
   reducers: {
      PLUS_ADULT: (state, action) => {
         //handle
         state.adult += 1;
      },
      MINUS_ADULT: (state, action) => {
         //handle
         state.adult -= 1;
      },
      PLUS_CHILDREN: (state, action) => {
         //handle
         state.children += 1;
      },
      MINUS_CHILDREN: (state, action) => {
         //handle
         state.children -= 1;
      },
      PLUS_ROOMS: (state, action) => {
         //handle
         state.rooms += 1;
      },
      MINUS_ROOMS: (state, action) => {
         //handle
         state.rooms -= 1;
      },

      UPDATE_AMOUNT: (state, action) => {
         //handle
         const payload = action.payload;
         const key = Object.keys(payload);
         state[key] = payload[key];
      },
   },
});
