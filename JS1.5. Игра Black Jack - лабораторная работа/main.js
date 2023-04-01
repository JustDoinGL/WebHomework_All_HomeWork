// Алгоритм игры в Black Jack:

// 1. Игрок делает ставку.
// 2. Дилер раздает по две карты каждому игроку, одну из которых он открывает.
// 3. Игрок выбирает, брать ли ему еще одну карту или остановиться.
// 4. Если игрок превышает 21, он проигрывает.
// 5. После того, как игрок решил остановиться, дилер дополнительно берет карты до тех пор, пока сумма очков на его руках не станет 17 и более.
// 6. Если дилер превышает 21, то игрок выигрывает.
// 7. Если у дилера и игрока одинаковое количество очков, они играют вничью.
// 8. Если у игрока на руках 21 очко, он выигрывает.
// 9. Если у дилера на руках 21 очко, игрок проигрывает.
// 10. Игра заканчивается, когда ставки выплачены или забраны, и начинается новый раунд.

// Реализация на JavaScript:

let deck = [];
let playerCards = [];
let dealerCards = [];

function createDeck() {
  const suits = ['♥', '♠', '♦', '♣'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(`${values[j]}${suits[i]}`);
    }
  }
  shuffleDeck();
  dealCards();
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function dealCards() {
  playerCards = [deck[0], deck[2]];
  dealerCards = [deck[1], deck[3]];
  deck.splice(0, 4);
}

function hit() {
  playerCards.push(deck[0]);
  deck.splice(0, 1);
}

function calculateHand(cards) {
  let total = 0;
  let aces = 0;
  for (let i = 0; i < cards.length; i++) {
    const value = cards[i].slice(0, -1);
    if (value === 'A') aces++;
    else if (isNaN(value)) total += 10;
    else total += parseInt(value);
  }
  for (let i = 0; i < aces; i++) {
    if (total + 11 > 21) total += 1;
    else total += 11;
  }
  return total;
}

function checkWinner() {
  const playerTotal = calculateHand(playerCards);
  const dealerTotal = calculateHand(dealerCards);
  if (playerTotal > 21) {
    console.log('Dealer wins!');
  } else if (dealerTotal > 21) {
    console.log('Player wins!');
  } else if (playerTotal > dealerTotal) {
    console.log('Player wins!');
  } else if (dealerTotal > playerTotal) {
    console.log('Dealer wins!');
  } else {
    console.log('Push');
  }
}

// Example game
createDeck();
console.log(`Player's cards: ${playerCards}`);
console.log(`Dealer's cards: [${dealerCards[0]}, *]`);
hit();
console.log(`Player's cards: ${playerCards}`);
checkWinner();
