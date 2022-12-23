import React, { useEffect, useState } from "react";
import apiCall from "../data/mockservice";
import Item from "./Item";
import "./itemscontainer.css";
import { useParams } from "react-router-dom";

export default function Itemscontainer() {
  const [productos, setProductos] = useState(null);

  let categorias = ["remeras", "pantalones", "zapatillas"];
  let urlsim = useParams().categoryid;

  useEffect(() => {
    if (categorias.includes(urlsim)) {
      apiCall("/" + urlsim).then((respuesta) => {
        setProductos(respuesta.results);
      });
    } else {
      apiCall().then((respuesta) => {
        setProductos(respuesta.results);
      });
    }
  }, [urlsim]);
  return (
    <>
      {productos ? (
        <div className="item-container">
          {productos.map((item) => {
            return (
              <Item
                title={item.title}
                key={item.id}
                img={item.thumbnail}
                price={item.price}
                invid={item["inventory_id"]}
              />
            );
          })}
        </div>
      ) : (
        <span class="loader"></span>
      )}
    </>
  );
}
