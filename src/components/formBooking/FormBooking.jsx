import React, { useState } from 'react';
import './FormBooking.scss';
import DatePicker from '../datePicker/DatePicker';
import { useSelector } from 'react-redux';
import { setStringToDate } from '../../utils/setStringToDate';
const FormBooking = () => {
   const [form, setForm] = useState({
      name: '',
      email: '',
      phone: '',
      identity: '',
      startDate: '',
      endDate: '',
      rooms: {
         type: 'type 1',
         room_number: {
            101: true,
            102: false,
            103: false,
         },
      },
      payment: '',
      totalPrice: 0,
   });

   const datePicker = useSelector(state => state.formSearch.datePicker);

   const handleOnChange = e => {
      console.log(e);
   };

   handleOnChange();

   const handleSubmit = e => {
      e.preventDefault();
      const submitData = {
         name: form.name,
         email: form.email,
         phone: form.phone,
         identity: form.identity,
         startDate: setStringToDate(datePicker.startDate, 'dd/MM/YYYY', '/'),
         endDate: setStringToDate(datePicker.endDate, 'dd/MM/YYYY', '/'),
         rooms: [
            {
               type: form.rooms.type,
               room_number: form.rooms.room_number,
            },
         ],
         payment: form.payment,
         totalPrice: form.totalPrice,
      };
      console.log(submitData);
   };

   return (
      <section className="formBooking">
         <div className="formBooking__Info">
            <div className="datePicker">
               <h2>Date</h2>
               <DatePicker></DatePicker>
            </div>
            <div className="reverseInfo">
               <h2>Reverse Info</h2>
               <form action="">
                  <div className="formItems">
                     <label>Your Full Name</label>
                     <input
                        value={form.name}
                        onChange={e => handleOnChange(e)}
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                     />
                  </div>
                  <div className="formItems">
                     <label>Your Email</label>
                     <input
                        value={form.email}
                        onChange={e => handleOnChange(e)}
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                     />
                  </div>
                  <div className="formItems">
                     <label>Your Number</label>
                     <input
                        value={form.phone}
                        onChange={e => handleOnChange(e)}
                        name="phone"
                        type="text"
                        placeholder="Enter your phone number"
                     />
                  </div>
                  <div className="formItems">
                     <label>Your Indentity Card Number</label>
                     <input
                        value={form.indentity}
                        onChange={e => handleOnChange(e)}
                        name="indentity"
                        type="text"
                        placeholder="Enter your Indentity card number"
                     />
                  </div>
               </form>
            </div>
         </div>
         <h2>Select Rooms</h2>
         <div className="selectRooms">
            <div className="doubleRoom">
               <h3>Budget Double Room</h3>
               <div className="flex gap-5">
                  <div>
                     <p>Pay nothing until (date time)</p>
                     <p>Max people: 3</p>
                     <p>350$</p>
                  </div>
                  <div className="flex flex-row gap-3 checkrooms">
                     <div className="flex flex-col">
                        <label>102</label>
                        <input
                           type="checkbox"
                           name="type"
                           id="type"
                           checked={e =>
                              form.rooms.room_number[e?.target.value]
                           }
                           onChange={e => handleOnChange(e)}
                           value={'101'}
                        />
                     </div>
                     <div className="flex flex-col">
                        <label>101</label>
                        <input
                           type="checkbox"
                           name="type"
                           id="type"
                           checked={true}
                           onChange={e => handleOnChange(e)}
                           value={'102'}
                        />
                     </div>
                     <div className="flex flex-col">
                        <label>101</label>
                        <input
                           type="checkbox"
                           name="type"
                           id="type"
                           onChange={e => handleOnChange(e)}
                           value={'103'}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <h3>Total Bill: 700$</h3>
         <div className="bill">
            <select name="payment" onChange={e => handleOnChange(e)}>
               <option value="">Select Payment Method</option>
               <option value="option-1">option-1</option>
               <option value="option-2">option-2</option>
               <option value="option-3">option-3</option>
            </select>
            <button onClick={handleSubmit}>Reverse</button>
         </div>
      </section>
   );
};

export default FormBooking;
