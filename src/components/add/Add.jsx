import React from 'react'
import "./add.scss"



function Add(props) {
const handleSubmit=(event)=>{
    event.preventDefault();

    //Aqui agregas producto

    //axios.post(****)

}

  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1>Agregar nuevo {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns.filter(item=>item.field !== "id" && item.field !=="imagen" && item.field!=="actions")
                .map(column=>(
                    <div className="itemadd">
                        <label >{column.headerName}</label>
                        <input type={column.type} placeholder={column.field}/>
                    </div>
                ))} 
                <button>Aceptar</button>               
            </form>
        </div>
    </div>
  )
}

export default Add