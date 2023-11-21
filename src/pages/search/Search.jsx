import React from 'react';
import SearchPopUp from '../../components/searchPopUp/SearchPopUp';
import SearchList from '../../components/searchList/SearchList';
import './Search.scss';

function Search() {
   return (
      <main className="searchPage">
         <SearchPopUp></SearchPopUp>
         <SearchList></SearchList>
      </main>
   );
}

export default Search;
