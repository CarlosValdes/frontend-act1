import React, { useState } from 'react'
import "./products.css"
import {products} from "../../data.jsx"
import Datatable from '../../components/datatable/Datatable.jsx';
import Add from '../../components/add/Add.jsx';



const pr=products.sort((a,b)=>a.id-b.id);
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field:"imagen",headerName:"Imagen",width:100,
      renderCell:(params)=>{
          return <img src={params.row.img || "./images/noimage.jpg"} alt="" />
      }
  },

  {
    field: 'productname',
    headerName: 'PRODUCTO',
    type: 'String',
    width: 200,
    editable: "false",
  },
  {
    field: 'productdescription',
    headerName: 'INFORMACION PRODUCTO',
    width: 280,
    type: 'String',
    editable: "false",
  },
  {
    field: 'qty',
    headerName: 'EXISTENCIA',
    type: 'number',
    width: 100,
    editable: "false",
  },
  
];

function Products() {
  const [open,setOpen]=useState(false);
  return (
    <div className='products' >
       <div className="info">
        <h1>Productos</h1>
        <button onClick={()=>setOpen(true)}>Agregar Producto</button>
       </div>
       <Datatable slug="product"  columns={columns} rows={pr}/>
       {open && <Add slug="Producto" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default Products