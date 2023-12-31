import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/contact-element.css";
import { Context } from "../store/appContext";

export const ContactElement = ({ contacts, borrarContacto, id }) => {
  const { actions } = useContext(Context);

  function editarContacto() {
    actions.updateContact(contacts);
  }

  return (
    <div className="container d-flex justify-content-between contenedor-elemento">
      <div className="contenedor-info">
        <img src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png" />
        <div className="contenedor-texto">
          <h3>{contacts.full_name}</h3>
          <p>
            <i className="bi bi-geo-alt-fill"></i>
            {contacts.address}
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i>
            {contacts.phone}
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i>
            {contacts.email}
          </p>
        </div>
      </div>
      <div className="contenedor-buttons">
        <Link to="/edit">
          <i className="bi bi-pencil-fill iconos-acciones" onClick={editarContacto}></i>
        </Link>
        <i className="bi bi-trash-fill iconos-acciones" data-bs-toggle="modal" data-bs-target={"#exampleModal" + id}></i>
      </div>

      <div className="modal fade" id={"exampleModal" + id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">¿Estás seguro?</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¡Oh no, no me elimines! ¿Podemos seguir siendo amigos?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh no</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => borrarContacto(id)}>¡Sí!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
