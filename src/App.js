import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container, Header} from 'semantic-ui-react';
import FlashCards from './FlashCards';
import CardForm from './CardForm';

class App extends React.Component {

  state = {
    flashCards: [
      {id:1, question:'What is 2+2?', answer:'4', /*isHidden:False*/ },
      {id:2, question:'What is 5x5?', answer:'25', /*isHidden:False*/},
      {id:3, question:'What is 20/4?', answer:'5', /*isHidden:False*/}
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

  // toggleAnswer = () => {                     //what even lol
  //   this.setState({
  //     isHidden: !this.state.isHidden
  //   });
  // }

  deleteCard = (id) => {
    console.log(id)

    const newCards = this.state.flashCards.filter( 
      card => card.id !== id);

      this.setState({
        flashCards:newCards
      })
  }

  render(){
    const {answer} = this.props;
    return (
      <Container>
        <Header as='h1'>Flash Cards!</Header>
        <br />
        <CardForm addCard={this.addCard}
        />
        <br />
        <br />
        <FlashCards 
        flashCards={this.state.flashCards}
        // toggleCallback={this.toggleAnswer}  //good grief how the hell do you do this
        // {...isHidden && <Show>{answer}</Show>} 
        deleteCallback={this.deleteCard}
        />
      </Container>
    );
  }
}

export default App;
