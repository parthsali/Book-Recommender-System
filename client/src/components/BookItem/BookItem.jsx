import React from 'react'
import './BookItem.css'

const BookItem = (props) => {
  
  
  return (
    
    <div className='item-container'>
        <h2>{props.title}</h2>
        <img src={props.url} />
        <h4>Author : {props.author}</h4>
        <h5>Rating : {props.rating}</h5>
    </div>
  )
}

export default BookItem