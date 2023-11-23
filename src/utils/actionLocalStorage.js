export const getFromLocalStorage = name => {
   return JSON.parse(localStorage.getItem(name));
};

export const saveToLocalStorage = (key, data) => {
   localStorage.setItem(key, JSON.stringify(data));
   return data;
};
