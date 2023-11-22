import { createSlice } from '@reduxjs/toolkit';
import { getDateTime } from '../../utils/getDateTime';

export const dateSlice = createSlice({
   name: 'DATE_PICK',
   initialState: {
      dateStart: getDateTime(new Date()),
      dateEnd: getDateTime(new Date()),
   },
   reducers: {
      UPDATE_DATE: (state, action) => {
         //handle
         const payload = action.payload;
         state.dateStart = payload.dateStart;
         state.dateEnd = payload.dateEnd;
      },
   },
});
