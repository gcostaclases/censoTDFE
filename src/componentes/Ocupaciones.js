import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../store/store";
import { guardarOcupaciones, guardarIdOcupacion } from "../features/ocupacionSlice";

const Ocupaciones = () => {
	const dispatch = useDispatch();

	const ocu = useSelector((state) => state.ocupaciones.listaOcupaciones);

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/ocupaciones.php`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((datosOcupaciones) => {
					console.log(datosOcupaciones);

					if (datosOcupaciones.codigo != 200) {
						// alert(dataListaPersonas.mensaje);
						console.log(datosOcupaciones.mensaje);
					} else {
						dispatch(guardarOcupaciones(datosOcupaciones.ocupaciones));
					}
				})
				.catch((error) => console.log(error));
		}
	}, []);

	const setearIdOnChange = (evento) => {
		console.log(evento);
		dispatch(guardarIdOcupacion(Number(evento.target.value)));
	};

	return (
		<select id="slcOcupaciones" onChange={setearIdOnChange}>
			{ocu.map((o) => (
				<option value={o.id} key={o.id}>
					{o.ocupacion}
				</option>
			))}
		</select>
	);
};

export default Ocupaciones;
