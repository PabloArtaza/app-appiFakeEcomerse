import React from "react";
import { NavLink } from "react-router-dom";

const ModalStyle = ({ products }) => {
  return (
    <div className="col-md-3 d-inline-flex mb-4" key={products.id}>
      <div className="card h-100 text-center p-4 me-5" >
        <img src={products.image} className="card-img-top" alt={products.title} height="250px"/>
        <div className="card-body">
          <h3 className="card-title">{products.title}</h3>
          <p> $ {products.price}</p>
          <NavLink to={`/${products.id}`} className="btn btn-primary">
            add to cart
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ModalStyle;
