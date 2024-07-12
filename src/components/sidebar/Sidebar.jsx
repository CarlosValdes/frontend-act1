import React from 'react'
import "./sidebar.scss"
import { Link } from 'react-router-dom'
import {menu} from "../../data"

function Sidebar() {
  return (
    <div className='sidebar'>
    {menu.map(item=>(
      <div className="item" key={item.id} >
        <span className="title">{item.title}</span>
        {item.listaitems.map(listaitems=>(
        <Link to={listaitems.url} className='litem' key={listaitems.id}>
          <img src={listaitems.icon} alt="" />
          <span className="listitemtitle">{listaitems.title}</span>
        </Link>
        ))}
      </div>
     ))} 
    </div>
  )
}

export default Sidebar