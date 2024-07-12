import React from 'react'
import "./singleproduct.scss"
import Productdetail from '../../components/productdetail/Productdetail'

//Obtener la informacion de un producto en base al id

function SingleProduct( props) {
  return (
    <div className='singleproduct'>
      <Productdetail/>
    </div>
  )
}

export default SingleProduct