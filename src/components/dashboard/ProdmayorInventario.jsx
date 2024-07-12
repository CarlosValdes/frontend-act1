import React from 'react'
import "./prodmayorinventario.css"
import {products} from "../../data.jsx"
import Listadodeproductos from '../Listadodeproductos.jsx';

const datos= products.sort(function(a,b){return a.qty<b.qty?1:-1;}).slice(0,5);

function ProdmayorInventario() {
  return (
    <div className='pmi-box'>
      <h1>Top 5 Productos Exceso Inventario</h1>
      <div className="list">
      <Listadodeproductos products={datos}/>        
      </div>
    </div>
  )
}

export default ProdmayorInventario