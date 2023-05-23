import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchValue);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <button onClick={handleSearchClick}>Поиск</button>
    </div>
  );
};

export default Search;
