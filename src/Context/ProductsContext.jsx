import { createContext, useState, useEffect } from "react";
import fakeStoreApi from '../mocks/fakeStoreApi.js'

export const ProductosContext = createContext({});

export const ProductosProvider = ({ children }) => {

    const [categoria, setCategoria] = useState("category") 
    const[productos, setProductos] = useState([]);    
    const[id, setId] = useState([])
    
    useEffect(()=>{

        fakeApi().then ( respuesta => setProductos(respuesta))
        
        async function fakeApi(){
            let response = await fetch(
                "https://fakestoreapi.com/products"
            );
            console.log(productos)
            return await response.json();  
        }
      },[productos]);

    return(
        <ProductosContext.Provider value={
            {products: productos, 
            categoria: categoria, 
            setCategoria: setCategoria,
            }
            }>
            {children}
        </ProductosContext.Provider>
    )
}