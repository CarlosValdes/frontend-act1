import React from 'react'
import "./totalinventario.css"
import{products} from "../../data.jsx"

const sum= products.reduce((total,current)=>total+current.qty,0);

function Totalinventario() {
  return (
    <div className='btotinv'>
          <h1>Total Productos en Inventario</h1>
          <span>{sum}</span>
    </div>
  )
}

export default Totalinventario