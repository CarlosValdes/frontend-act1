import React from 'react'
import {products} from "../../data.jsx"
import Listadodeproductos from '../Listadodeproductos.jsx';
import "./prodmayorinventario.css"

const datos= products.sort(function(a,b){return a.qty<b.qty?-1:1;}).slice(0,5);

function ProdFaltastock() {
  return (
    <div className='pmi-box'>
      <h1>Top 5 Productos Stock Limitado</h1>
      <div className="list">
      <Listadodeproductos products={datos}/>        
      </div>
    </div>
  )
}

export default ProdFaltastock