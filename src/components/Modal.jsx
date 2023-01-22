import React from "react";
import { useContext } from 'react';
import { ProductosContext } from '../Context/ProductsContext.jsx';
import ModalStyle from "./ModalStyle.jsx";


const Modal = () => {
  let {products} = useContext( ProductosContext )

  return (
    <div>
         {
      products.map((producto)=> <ModalStyle products={producto} key={producto.id}/>)
       }
    </div>
    )

};

export default Modal;
