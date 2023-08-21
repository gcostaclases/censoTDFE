import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../../../../../store/store";
import {
	guardarCiudadesPorDepa,
	guardarIdCiudad,
} from "../../../../../features/ciudadSlice";

const Ciudades = () => {
	const dispatch = useDispatch();

	const ciudadPorDepa = useSelector(
		(state) => state.ciudades.listaCiudadesPorDepa
	);
	const idDepart = useSelector((state) => state.departamentos.idDepartamento);

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
					console.log(
						`Respuesta completa fetch: ${JSON.stringify(datosCiudadesPorDepa)}`
					);

					if (datosCiudadesPorDepa.codigo != 200) {
						console.log(datosCiudadesPorDepa.mensaje);
					} else {
						// console.log(
						// 	`Respuesta ciudades fetch: ${JSON.stringify(
						// 		datosCiudadesPorDepa.ciudades
						// 	)}`
						// );
						dispatch(guardarCiudadesPorDepa(datosCiudadesPorDepa.ciudades));
					}
				})
				.catch((error) => console.log(error));
		}
		//console.log(`Id de ciudades: ${JSON.stringify(ciudadPorDepa.id)}`);
	}, [idDepart]);

	const setearIdCiudadOnChange = (evento) => {
		// ciudadPorDepa.forEach((ciudad) => {
		//console.log(`ID de Ciudad: ${ciudad.id}, Nombre Ciudad: ${ciudad.nombre}`);
		// if (ciudad.id === Number(evento.target.value)) {
		dispatch(guardarIdCiudad(Number(evento.target.value)));
		// }
		// });
	};

	// ciudadPorDepa.forEach((ciudad) => {
	// 	console.log(`ID de Ciudad: ${ciudad.id}, Nombre Ciudad: ${ciudad.nombre}`);
	// });

	return (
		<select
			id="slcCiudades"
			onChange={setearIdCiudadOnChange}
			className="form-select"
			defaultValue={0}
		>
			<option value="0" disabled>
				Seleccionar Ciudad
			</option>
			{ciudadPorDepa.map((c) => (
				<option value={c.id} key={c.id}>
					{c.nombre}
				</option>
			))}
		</select>
	);
};

export default Ciudades;
