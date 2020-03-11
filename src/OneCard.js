import React from 'react';
import {Table, Button} from 'semantic-ui-react';


const ThisCard = ({question, answer, id, foo}) => {
  return (
    <Table.Row>
    <Table.Cell>{question}</Table.Cell>
    <Table.Cell>{answer}</Table.Cell>
    <Table.Cell>
      <Button color='blue' onClick={() => foo(id)} >Delete</Button>
    </Table.Cell>
  </Table.Row>
  )
};



export default ThisCard