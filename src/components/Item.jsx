import React from "react";
import "./item.css"

export default function Item({ title, key, img, price }) {
  return (
    <div id={key} className="card-container" data-aos="fade-right">
      <img src={img} alt="assd"/>
      <div>
        <h3 className= "animate__animated animate__bounce">{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}
