import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import ThisCard from './OneCard';


const FlashCards = props => {
  return(
  // <Table celled>                YO FUCK THIS STYLING BULLSHIT
  //   <Table.Header>         I've tried like 3 different semantic things 
  //     <Table.Row>    Can't get any of them to even remotely work it's so annoying
  //       <Table.HeaderCell>Question</Table.HeaderCell>          
  //       <Table.HeaderCell>Answer</Table.HeaderCell>
  //     </Table.Row>
  //   </Table.Header>
  //   <Table.Body>   
      props.flashCards.map( card => (
        <ThisCard
          key={card.id}
          foo = {props.deleteCallback}
          zoo = {props.toggleCallback}
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