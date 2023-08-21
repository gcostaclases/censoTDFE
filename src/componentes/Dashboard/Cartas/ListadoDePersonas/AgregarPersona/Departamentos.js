import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../../../../../store/store";
import {
	guardarDepartamentos,
	guardarIdDepartamento,
} from "../../../../../features/departamentoSlice";
import { guardarIdCiudad } from "../../../../../features/ciudadSlice";

const Departamentos = () => {
	const dispatch = useDispatch();

	const depart = useSelector((state) => state.departamentos.listaDepartamentos);
	const idDepart = useSelector((state) => state.departamentos.idDepartamento);
	const ciudadPorDepa = useSelector(
		(state) => state.ciudades.listaCiudadesPorDepa
	);

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/departamentos.php`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((datosDepartamentos) => {
					console.log(datosDepartamentos);

					if (datosDepartamentos.codigo != 200) {
						console.log(datosDepartamentos.mensaje);
					} else {
						dispatch(guardarDepartamentos(datosDepartamentos.departamentos));
					}
				})
				.catch((error) => console.log(error));
		}
	}, []);

	const setearIdOnChange = (evento) => {
		//console.log(evento);
		dispatch(guardarIdDepartamento(Number(evento.target.value)));
	};

	return (
		<select
			id="slcDepartamentos"
			onChange={setearIdOnChange}
			className="form-select"
			defaultValue={0}
		>
			<option value="0" disabled>
				Seleccionar Departamento
			</option>
			{depart.map((d) => (
				<option value={d.id} key={d.id}>
					{d.nombre}
				</option>
			))}
		</select>
	);
};

export default Departamentos;
