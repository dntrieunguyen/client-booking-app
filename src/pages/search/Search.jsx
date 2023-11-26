import React from 'react';
import './Search.scss';
import { SearchList, SearchPopUp } from '../../components';

function Search() {
   return (
      <main className="searchPage">
         <SearchPopUp></SearchPopUp>
         <SearchList></SearchList>
      </main>
   );
}

export default Search;
