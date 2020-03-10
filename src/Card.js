import React from 'react'

const Card = ({question, answer, id}) => {
  return(
    <>
    <div>{question}</div> 
    <div>{answer}</div>
    </>
  )
};



export default Card