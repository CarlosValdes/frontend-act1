import React from 'react'
import "./datatable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';






function Datatable(props) { 
    const borrar=(id)=>{
        //aqui se va a borrar
        console.log(id + " Se ha marcado para eliminar");
        alert(id + " Se ha marcado para eliminar");
        }
  

    const actionColumn={
        field:"action",
        headerName:"ACCIONES",
        width:120,
        renderCell:(params)=>{
            return(
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                    <img src="./images/open.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={()=>borrar(params.row.id)}>
                        <img src="./images/delete.svg" alt="" />
                    </div>
                </div>
            )
        }
    
    }
    
    
  return (
    <div className='datatable'>
        <DataGrid
        className='grid'
        rows={props.rows}
        columns={[...props.columns,actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{
                    debounceMs:500
                }
            }
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      
        
      />
    </div>
  )
}

export default Datatable