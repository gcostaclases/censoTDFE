import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../../../../../store/store";
import {
	guardarOcupaciones,
	guardarIdOcupacion,
} from "../../../../../features/ocupacionSlice";
import Ocupaciones from "../Ocupaciones";

const SelectOcupaciones = () => {
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
		<select
			id="slcOcupaciones"
			onChange={setearIdOnChange}
			className="form-select"
			defaultValue="0"
		>
			<option value="0" disabled>
				Seleccionar Ocupacción
			</option>
			{ocu.map((o) => (
				<Ocupaciones key={o.id} {...o} />
			))}
		</select>
	);
};

export default SelectOcupaciones;
