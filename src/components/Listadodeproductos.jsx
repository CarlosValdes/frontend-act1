import React from 'react'


const Listadodeproductos = (props ) => {

    const products=props.products;
  return (
    <div product-list>
        {products.map(producto=>(
          <div className="listitem" key={producto.id}>
            <div className="prod">
              <img src={producto.img} alt="" />
              <div className="productinfo">
                <span className="name">{producto.productname}</span>
                <span className="description">{producto.productdescription}</span>
              </div>
            </div>
            <span className="quantity">{producto.qty}</span>
          </div>
        ))}      
    </div>
  )
}

export default Listadodeproductos
