import React from "react";
import "./item.css";

export default function Item({ title, key, img, price,invid }) {
  return (
    <div id={key} className="card-container" data-aos="fade-up">
      <img className="img" src={img} alt="assd" />
      <div>
        <h3 className="animate__animated animate__bounce">{title}</h3>
        <p>${price}</p>
        {invid && <h3 style={{color:"blue"}}>ID: ${invid}</h3>}
      </div>
    </div>
  );
}
