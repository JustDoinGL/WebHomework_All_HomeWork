import React, { useState } from 'react';

const List = ({ items }) => {
  const [searchResults, setSearchResults] = useState(items);

  const handleSearch = (searchValue) => {
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResults(filteredItems);
  };

  return (
    <ul>
      {searchResults.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
