import React, { Component } from "react";
import { Context } from "../store/appContext";


export const Card = (index, name, number, email, address) => { 
  
  const { store, actions } = useContext();

  const getActions = actions.getdatastore();
  console.log(store)

    return (
  <div className="card">
    <div className="card-header"></div>
    <div className="card-body">
      <h5 className="card-title">nombre</h5>
      <p className="card-text">numero</p>
      <p className="card-text">email</p>
      <p className="card-text">adreess</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
)};

export default Card 