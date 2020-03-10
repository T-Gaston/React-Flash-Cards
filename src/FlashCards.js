import React from 'react';
import Card from './Card'



const FlashCards = props => {
  return props.flashCards.map( card => (
    <Card
      key={card.id}
      {...card}
      // question={card.question}
      // answer={card.answer}
      // id={card.id}
    />
  ))
}


export default FlashCards;