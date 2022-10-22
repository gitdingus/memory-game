import React from 'react';
import getCardInfo from './card-info.js';
import Card from './components/Card.jsx';
import './styles.css';

export default function App() {
  // Held in a variable so they are able to be shuffled outside of the return
  const Cards = getCardInfo().map((card) => (
    <Card key={card.uuid} title={card.title} path={card.path} />
  ));

  return (
    <div>
      { Cards }
    </div>
  );
}
