export const getDateTime = date => {
   let newDate = `${date.getDate()}/${
      date.getMonth() + 1
   }/${date.getFullYear()}`;
   return newDate;
};
