import React from "react";
import Clock from "./For7Task/Clock";
import Button from "./For7Task/Button";
import List from "./For7Task/List";
import Search from "./For7Task/Search";

function Home7() {
  const items = ["Apple", "Banana", "Cherry", "Durian"];

  return (
    <div>
      {/* Часы */}
      <Clock />

      {/* Запись ререндинга страницы, работает на все.*/}
      {/* <Button /> */}

      {/* Поиск */}
      {/* <Search
        onSearch={(searchValue) => console.log(`Search for ${searchValue}`)}
      />
      <List items={items} /> */}
    </div>
  );
}

export default Home7;
