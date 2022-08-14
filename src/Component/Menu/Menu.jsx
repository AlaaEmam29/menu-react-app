import React from 'react'
import {useGlobalContext} from '../Context/Context'
export default function Menu() {
    const {menuItems} = useGlobalContext(); 
  return (
    <>
    <div className="row text-center menu-items py-5">
    {menuItems.map((item) => {
        const {id, title, price, img, desc} = item;
        return (
            <div className="col-md-6 mb-3" key={id}>
            <article className="menu-item d-flex ">
            <div className="row ">
            <div className="col-lg-6">
            <img src={img} className="img" alt={title}/>

            </div>
            <div className="col-lg-6">
            <div className="menu-body">
            <header className="d-flex justify-content-between align-items-center header-brdr">
            <h6 className="title text-capitalize ">{title}</h6>
            <p className="price mb-0">${price}</p></header>
             <p className="desc text-start text-muted">{desc}</p>
             </div>
            </div>
            </div>
         
            </article>
            </div>
        )
    })}

    </div>
    </>
  )
}
