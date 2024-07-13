import React from "react";
import "../stylesheets/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`Foto de ${
          props.imagen.charAt(0).toUpperCase() + props.imagen.slice(1)
        }`}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          {props.testimonio}
          <strong>{props.part}</strong>
          {props.testimonio2}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
