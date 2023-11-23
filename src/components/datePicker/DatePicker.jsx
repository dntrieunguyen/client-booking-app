import { useEffect, useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './DatePicker.scss';
import { DateRange } from 'react-date-range';
import { useDispatch, useSelector } from 'react-redux';
import { getDateTime } from '../../utils/getDateTime';
import { setStringToDate } from '../../utils/setStringToDate';
import { formSearchSlice } from '../searchPopUp/formSearchSlice';
const DatePicker = () => {
   const datePick = useSelector(state => state.formSearch.datePicker);
   console.log();
   const [state, setState] = useState([
      {
         startDate: setStringToDate(datePick.startDate, 'dd/MM/YYYY', '/'),
         endDate: setStringToDate(datePick.endDate, 'dd/MM/YYYY', '/'),
         key: 'selection',
      },
   ]);
   const dispatch = useDispatch();
   const handleOnChange = item => {
      setState([item.selection]);
   };
   useEffect(() => {
      dispatch(
         formSearchSlice.actions.UPDATE_DATE({
            dateStart: getDateTime(state[0]?.startDate),
            dateEnd: state[0]?.endDate
               ? getDateTime(state[0]?.endDate)
               : getDateTime(new Date()),
         }),
      );
   }, [state]);

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
