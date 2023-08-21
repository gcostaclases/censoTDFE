import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { URLBASE } from "../../../store/store";
import { guardarPersonas } from "../../../features/listadoPersonasSlice";

import Header from "./ListadoDePersonas/Header";
import Body from "./ListadoDePersonas/Body";
import Footer from "./ListadoDePersonas/Footer";

const ListadoDePersonas = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		// LLAMADO QUE TRAE EL LISTADO DE PERSONAS
		if (apikey != null) {
			fetch(`${URLBASE}/personas.php?idUsuario=${idUsuario}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((dataListaPersonas) => {
					console.log(dataListaPersonas);

					if (dataListaPersonas.codigo != 200) {
						console.log(dataListaPersonas.mensaje);
					} else {
						dispatch(guardarPersonas(dataListaPersonas.personas));
					}
				})
				.catch((error) => console.log(error));
		}
	}, []);

	return (
		<article className="col-10 card" id="cartaListadoPersonas">
			<Header />
			<Body />
			<Footer />
		</article>
	);
};

export default ListadoDePersonas;
