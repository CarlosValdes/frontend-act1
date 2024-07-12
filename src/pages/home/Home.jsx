import React from 'react'
import "./home.css"
import ProdmayorInventario from '../../components/dashboard/ProdmayorInventario'
import Totalinventario from '../../components/dashboard/Totalinventario'
import ProdInactivo from '../../components/dashboard/ProdInactivo'
import ProdFaltastock from '../../components/dashboard/ProdFaltastock'

function Home() {
  return (
    <div className='home'>
      <div className="box bc1">
      <ProdmayorInventario/>
      </div>
      <div className="box bc2">
        <Totalinventario/>
      </div>
      <div className="box bc3">
       <ProdInactivo/>
      </div>
      <div className="box bc4">
        <ProdFaltastock/>
      </div>


      <div className="box bc5">la de prueba</div>

    </div>
  )
}

export default Home
