import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePicker.scss';
import { DateRange } from 'react-date-range';
import { useDispatch } from 'react-redux';
import { dateSlice } from '../../redux/reducer/dateSlice';
import { getDateTime } from '../../utils/getDateTime';
const DatePicker = () => {
   const [state, setState] = useState([
      {
         startDate: new Date(),
         endDate: null,
         key: 'selection',
      },
   ]);
   const dispatch = useDispatch();
   const handleOnChange = item => {
      setState([item.selection]);
   };
   dispatch(
      dateSlice.actions.UPDATE_DATE({
         dateStart: getDateTime(state[0]?.startDate),
         dateEnd: state[0]?.endDate
            ? getDateTime(state[0]?.endDate)
            : getDateTime(new Date()),
      }),
   );
   return (
      <>
         <DateRange
            editableDateInputs={true}
            onChange={handleOnChange}
            moveRangeOnFirstSelection={false}
            ranges={state}
         />
      </>
   );
};

export default DatePicker;
