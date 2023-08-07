import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../../../../../store/store";
import {
	guardarDepartamentos,
	guardarIdDepartamento,
} from "../../../../../features/departamentoSlice";

const Departamentos = () => {
	const dispatch = useDispatch();

	const depart = useSelector((state) => state.departamentos.listaDepartamentos);
	//const idDepart = useSelector((state) => state.departamentos.idDepartamento);

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
						//alert(datosDepartamentos.mensaje);
						console.log(datosDepartamentos.mensaje);
					} else {
						dispatch(guardarDepartamentos(datosDepartamentos.departamentos));
					}
				})
				.catch((error) => console.log(error));
		}
	}, []);

	const setearIdOnChange = (evento) => {
		console.log(evento);
		dispatch(guardarIdDepartamento(Number(evento.target.value)));
	};

	return (
		<select
			id="slcDepartamentos"
			onChange={setearIdOnChange}
			className="form-select"
		>
			<option value="0">Seleccionar Departamento</option>
			{depart.map((d) => (
				<option value={d.id} key={d.id}>
					{d.nombre}
				</option>
			))}
		</select>
	);
};

export default Departamentos;
