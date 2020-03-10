import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header} from 'semantic-ui-react';
import FlashCards from './FlashCards';
import CardForm from './CardForm';

class App extends React.Component {

  state = {
    flashCards: [
      {id:1, question:'What is 2+2?', answer:'4' /* isTrue:False? */ },
      {id:2, question:'What is 5x5?', answer:'25'},
      {id:3, question:'What is 20/4?', answer:'5'}
    ]
  }

  render(){
    return (
      <Container>
        <Header as='h1'>Flash Cards!</Header>
        <CardForm />
        <FlashCards flashCards={this.state.flashCards} />
      </Container>
    );
  }
}

export default App;
