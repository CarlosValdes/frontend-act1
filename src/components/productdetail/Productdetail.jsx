import React from "react";
import "./productdetail.scss"

function Productdetail(props) {
  return (
    <div className="productdetail">
      <div className="view">
        <div className="topinfo">
          <img src={props.img} alt="" />
          <h1>{props.productname}</h1>
          <button>Actualizar</button>
        </div>
        <div className="details">          
            {Object.entries(props.info).map((item)=>(
                <div className="itemd" key={item[0]}>
                    <span className="itemtitle">{item[0]}</span>
                    <span className="itemvalue">{item[1]}</span>
                </div>
            ))
            }          
        </div>
      </div>
      <div className="inf">
        <h2>Ultimos 5 movimientos</h2>
        <ul>
            <li>
                <div>
                    <p>Alta 5 unidades</p>
                    <time>hace 2 dias</time>
                </div>
            </li>
            <li>
                <div>
                    <p>Baja 1 unidades</p>
                    <time>hace 3 dias</time>
                </div>
            </li>
            <li>
                <div>
                    <p>Baja 2 unidades</p>
                    <time>hace 4 dias</time>
                </div>
            </li>
            <li>
                <div>
                    <p>Baja 1 unidades</p>
                    <time>hace 6 dias</time>
                </div>
            </li>
            <li>
                <div>
                    <p>Alta 1 unidades</p>
                    <time>hace 8 dias</time>
                </div>
            </li>
        </ul>

      </div>
    </div>
  );
}
export default Productdetail;
