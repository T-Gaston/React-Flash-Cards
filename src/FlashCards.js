import React from 'react';
import ThisCard from './OneCard';


const FlashCards = props => {
 return(
   props.flashCards.map( card => (
    <ThisCard
      key={card.id}
      {...card}
      foo = {props.deleteCallback}
      // question={card.question}
      // answer={card.answer}
      // id={card.id}
    />
  ))
 )
}


export default FlashCards;