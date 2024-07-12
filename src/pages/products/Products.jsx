import React from 'react'
import "./products.css"
import {products} from "../../data.jsx"
import Listadodeproductos from '../../components/Listadodeproductos.jsx';
import Datatable from '../../components/datatable/Datatable.jsx';
import { DataGrid,GridColDef, GridToolbar } from '@mui/x-data-grid';


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
      field:"actions",headerName:"Acciones",width:100,
      renderCell:(params)=>{
          return <div className="action">
              <div className="view">View</div>
              <div className="delete">Delete</div>

          </div>;
      }
  },
  {
    field: 'productname',
    headerName: 'PRODUCTO',
    width: 200,
    editable: false,
  },
  {
    field: 'productdescription',
    headerName: 'INFORMACION PRODUCTO',
    width: 280,
    editable: false,
  },
  {
    field: 'qty',
    headerName: 'EXISTENCIA',
    type: 'number',
    width: 100,
    editable: false,
  },
  
];







const datos= products;
function Products() {
  return (
    <div className='products' >
       <div className="info">
        <h1>Productos</h1>
        <button>Agregar Producto</button>
       </div>
       <Datatable columns={columns} rows={pr}/>
    </div>
  )
}

export default Products