import React from 'react'
import { Form, FormGroup, FormInput, Button } from 'semantic-ui-react'
import App from './App'

export default class CardForm extends React.Component {
  state = {
    question:'',
    answer:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      question:'',
      answer:''
    })
  }

  handleChange = (e) => {
    console.log(e)
  }

  render(){
    return(
      <Form>
        <FormGroup>
          <FormInput
            required
            label='question'
            question='question'
            placeholder='New Question Here'
            value={this.state.question}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormInput
          required
          label='answer'
          answer='answer'
          placeholder='Answer Here'
          value={this.state.answer}
          onChange={this.handleChange}
          />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }

}


