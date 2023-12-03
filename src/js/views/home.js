import { Navbar } from "../component/navbar";
import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	
	useEffect(()=> {
		actions.contaclist();
	});


	return (
		<div className="text-center mt-5">
			<Navbar/>
			{
				store.contactos.map((contactos, index) =>(
				<Card 
					index={index} 
					name={contactos.full_name} 
					number={contactos.phone} 
					email={contactos.email} 
				
					address={contactos.address}/>))
			}
	</div>
	)}
;
