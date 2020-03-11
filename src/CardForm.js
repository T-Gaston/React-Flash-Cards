import React from 'react'
import { Form, FormGroup, FormInput } from 'semantic-ui-react'
import App from './App'

export default class CardForm extends React.Component {
  state = {
    question:'',
    answer:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addCard(this.state)
    this.setState({
      question:'',
      answer:''
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormInput
            required
            label='question'
            name='question'
            placeholder='New Question Here'
            value={this.state.question}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <FormInput
            required
            label='answer'
            name='answer'
            placeholder='Answer Here'
            value={this.state.answer}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }

}


