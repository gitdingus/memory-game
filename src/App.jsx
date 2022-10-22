import React, { useState, useEffect } from 'react';
import getCardInfo from './card-info.js';
import shuffleArray from './shuffle-array.js';
import Card from './components/Card.jsx';
import './styles.css';

let cardData = getCardInfo();

export default function App() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const pScore = document.querySelector('#score');
    pScore.textContent = `Score: ${score}`;
  });

  const cardClicked = (uuid, previouslyClicked) => {
    if (previouslyClicked === true) {
      setScore(0);
      cardData = getCardInfo();
    } else {
      setScore(score + 1);
    }
  };

  const Cards = cardData.map((card) => (
    <Card
      key={card.uuid}
      uuid={card.uuid}
      title={card.title}
      path={card.path}
      reportClick={cardClicked}
    />
  ));

  shuffleArray(Cards);

  return (
    <div className="card-container">
      {
        Cards
      }
    </div>
  );
}
