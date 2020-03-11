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

  getId() {
    return Math.floor(Math.random()*100000)
  }

  addCard = (card) => {
    var newCard = {...card, id:this.getId()}
    var newCards  = [newCard, ...this.state.flashCards]

    this.setState({
      flashCards:newCards
    })
  }


  deleteCard = (id) => {
    //remove contact from the state
    console.log(id)
    //uses id as a parameter so we know which contact to delete
    // const {contacts } = this.state;          this is a shorthand way that reduces the "this.state.contact.filter"
    // const newContacts = contacts.filter(contact => contact.id !== id)
    const newCards = this.state.flashCards.filter( 
      card => card.id !== id);

      this.setState({
        flashCards:newCards
      })
  }

  render(){
    return (
      <Container>
        <Header as='h1'>Flash Cards!</Header>
        <br />
        <CardForm addCard={this.addCard}/>
        <br />
        <br />
        <FlashCards 
        flashCards={this.state.flashCards} 
        deleteCallback={this.deleteCard}
        />
      </Container>
    );
  }
}

export default App;