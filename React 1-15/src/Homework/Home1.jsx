import React, { useState } from 'react';

function Home1() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Вы нажали кнопку');
  };

  return (
    <div>
      <button onClick={handleClick}>Нажми меня</button>
      {message && <p>{message}</p>}
    </div>
  )
}

export default Home1


