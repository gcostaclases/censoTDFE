import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../store/store";
import {
	guardarCiudades,
	guardarCiudadesPorDepa, guardarIdCiudad,
} from "../features/ciudadSlice";

const Ciudades = () => {
	const dispatch = useDispatch();
	const ciudad = useSelector((state) => state.ciudades.listaCiudades);
	const ciudadPorDepa = useSelector(
		(state) => state.ciudades.listaCiudadesPorDepa
	);
	const idDepart = useSelector((state) => state.departamentos.idDepartamento);

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null && idDepart !== null) {
			fetch(`${URLBASE}/ciudades.php`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((datosCiudades) => {
					console.log(datosCiudades);

					if (datosCiudades.codigo != 200) {
						//alert(datosDepartamentos.mensaje);
						console.log(datosCiudades.mensaje);
					} else {
						dispatch(guardarCiudades(datosCiudades.ciudades));
					}
				})
				.catch((error) => console.log(error));
		}
	}, [dispatch]);

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/ciudades.php?idDepartamento=${idDepart}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((datosCiudadesPorDepa) => {
					console.log(datosCiudadesPorDepa);

					if (datosCiudadesPorDepa.codigo != 200) {
						//alert(datosDepartamentos.mensaje);
						console.log(datosCiudadesPorDepa.mensaje);
					} else {
						dispatch(guardarCiudadesPorDepa(datosCiudadesPorDepa.ciudades));
					}
				})
				.catch((error) => console.log(error));
		}
	}, [idDepart, dispatch]);

	const setearIdCiudadOnChange = (evento) => {
		console.log(evento);
		dispatch(guardarIdCiudad(Number(evento.target.value)));
	};

	console.log(idDepart);
	const idDepartDisponible = () => {
		if (idDepart != null) {
			return true;
		} else {
			return false;
		}
	};

	if (!idDepartDisponible()) {
		return (
			<select id="slcCiudades">
				{ciudad.map((c) => (
					<option value={c.id} key={c.id}>
						{c.nombre}
					</option>
				))}
			</select>
		);
	} else {
		return (
			<select id="slcCiudades" onChange={setearIdCiudadOnChange}>
				{ciudadPorDepa.map((c) => (
					<option value={c.id} key={c.id}>
						{c.nombre}
					</option>
				))}
			</select>
		);
	}
};

export default Ciudades;
