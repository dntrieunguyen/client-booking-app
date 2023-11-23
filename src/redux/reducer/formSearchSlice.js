import { createSlice } from '@reduxjs/toolkit';
import { getDateTime } from '../../utils/getDateTime';

export const formSearchSlice = createSlice({
   name: 'FORM_SEARCH',
   initialState: {
      inputText: '',
      datePicker: {
         startDate: getDateTime(new Date()),
         endDate: getDateTime(new Date()),
      },
      amount: {
         adult: 0,
         children: 0,
         rooms: 0,
      },
      price: {
         min: 0,
         max: 0,
      },
   },

   reducers: {
      //Input Text

      //Date Picker
      UPDATE_DATE: (state, action) => {
         //handle
         const payload = action.payload;
         state.datePicker.startDate = payload.dateStart;
         state.datePicker.endDate = payload.dateEnd;
      },
      // Amount
      PLUS_ADULT: (state, action) => {
         //handle
         state.amount.adult += 1;
      },
      MINUS_ADULT: (state, action) => {
         //handle
         state.amount.adult -= 1;
      },
      PLUS_CHILDREN: (state, action) => {
         //handle
         state.amount.children += 1;
      },
      MINUS_CHILDREN: (state, action) => {
         //handle
         state.amount.children -= 1;
      },
      PLUS_ROOMS: (state, action) => {
         //handle
         state.amount.rooms += 1;
      },
      MINUS_ROOMS: (state, action) => {
         //handle
         state.amount.rooms -= 1;
      },

      UPDATE_AMOUNT: (state, action) => {
         //handle
         const payload = action.payload;
         const key = Object.keys(payload);
         state.amount[key] = payload[key];
      },

      //Price per night
      UPDATE_PRICE: (state, action) => {
         //handle
         const payload = action.payload;
         const key = Object.keys(payload);
         state.price[key] = payload[key];
      },
   },
});
