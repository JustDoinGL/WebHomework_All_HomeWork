import React, { useState } from "react";

function Home6(props) {
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
    setIsShown(!isShown);
  };
  return (
    <div>
      <button onClick={toggleIsShown}>
        Нажми чтоб показать имя
      </button>
      {isShown && <p>Name - {props.name} Age - {props.age}</p>}
    </div>
  );
}

export default Home6;
