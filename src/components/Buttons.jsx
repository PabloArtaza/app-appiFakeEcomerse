import { useContext } from 'react';
import { ProductosContext } from '../Context/ProductsContext.jsx';
import React from "react";

    
const Buttons = () => {

    let {setCategoria} = useContext( ProductosContext )

  return (
    <div>
      
      <button onClick={(e) => setCategoria('category')}  type="button" className="btn btn-outline-secondary ms-2 m-3">
        All
      </button>
      <button onClick={() => setCategoria("men's clothing")}    type="button" className="btn btn-outline-secondary ms-2 m-3">
        Men's Clothing
      </button>
      <button onClick={() => setCategoria("women's clothing")}  type="button" className="btn btn-outline-secondary ms-2 m-3">
       Women's Clothing
      </button>
      <button   type="button" className="btn btn-outline-secondary ms-2 m-3">
        Jewelery
      </button>
      <button   type="button" className="btn btn-outline-secondary ms-2 m-3">
        Electronic
      </button>
    </div>
  );
};

export default Buttons;
