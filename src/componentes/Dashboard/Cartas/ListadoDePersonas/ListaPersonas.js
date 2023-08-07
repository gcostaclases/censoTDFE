import { URLBASE } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";

import { eliminarPersona } from "../../../../features/listadoPersonasSlice";

const ListaPersonas = ({
	id,
	nombre,
	departamento,
	ciudad,
	fechaNacimiento,
	ocupacion,
}) => {
	const dispatch = useDispatch();

	const eliminarPersona = (idPersona) => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/personas.php?idCenso=${idPersona}`, {
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => {
					return response.json();
				})
				.then((personaBorrada) => {
					console.log(personaBorrada);
					let msg = personaBorrada.mensaje;
					alert(msg);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<tr key={id}>
			<td>{nombre}</td>
			<td>{departamento}</td>
			<td>{ciudad}</td>
			<td>{fechaNacimiento}</td>
			<td>{ocupacion}</td>
			<td>
				<input
					type="button"
					className="btn btn-danger"
					value="Eliminar"
					onClick={eliminarPersona(id)}
				/>
			</td>
		</tr>
	);
};

export default ListaPersonas;
