const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			contaclist: async () => {
				try {
					const url = "https://playground.4geeks.com/apis/fake/contact/agenda/Joseblue11"
					const getcontac = await fetch(url);
					if (getcontac.status !== 200)  {
						console.log("hubo un error", getcontac.status)
					};
					const data = await getcontac.json()
					console.log()
					return data 

				} catch (error) {
					console.log(error)
				}
			},
			
			getdatastore: async () => {
				const action = getActions();
				const basedatos = await action.contaclist() ;
				setStore({ contactos: basedatos })

			}
		}
	};
}
export default getState;
