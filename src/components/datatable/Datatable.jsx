import React from 'react'
import "./datatable.scss"
import { DataGrid,GridColDef, GridToolbar } from '@mui/x-data-grid';



function Datatable(props) {    

  return (
    <div className='datatable'>
        <DataGrid
        className='grid'
        rows={props.rows}
        columns={props.columns}
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