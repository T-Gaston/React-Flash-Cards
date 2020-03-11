import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import ThisCard from './OneCard';


const FlashCards = props => {
  return(
  // <Table celled>
  //   <Table.Header>
  //     <Table.Row>
  //       <Table.HeaderCell>Question</Table.HeaderCell>          
  //       <Table.HeaderCell>Answer</Table.HeaderCell>
  //     </Table.Row>
  //   </Table.Header>
  //   <Table.Body>   
      props.flashCards.map( card => (
        <ThisCard
          key={card.id}
          foo = {props.deleteCallback}
          {...card}
          // question={card.question}
          // answer={card.answer}
          // id={card.id}
        />
      ))
  )
  //   </Table.Body>
  // </Table>
};


export default FlashCards;