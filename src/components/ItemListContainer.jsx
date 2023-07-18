import React from 'react'
import '../assets/ItemListContainer.css';

export default function ItemListContainer(props) {
  return (
    <>
      
      <div className="card">
        <div className="photo">

        <img src="https://placehold.co/80x80.png" alt="" /> 
        </div>
        <h3>{props.name} </h3>
        <p> {props.comentario} </p>
      </div>
    </>
  )
}
