import React from 'react';
import { useContext } from 'react';
import { ProductosContext } from '../Context/ProductsContext.jsx';
import Buttons from './Buttons.jsx';
import CardStyle from './CardStyle.jsx';


const Products = () => {

  let {products} = useContext( ProductosContext )

   
  return (
    <div >
      <Buttons />
      {
      products.map((producto)=> <CardStyle products={producto} key={producto.id}/>)
       }
    </div>
  )
  
}

export default Products