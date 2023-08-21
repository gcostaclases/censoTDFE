import { useSelector } from "react-redux";
import ListaPersonas from "./ListaPersonas";

const Footer = () => {
	const perFiltrada = useSelector(
		(state) => state.personas.listaPersonasFiltradas
	);

	return (
		<div className="card-footer row">
			<table className="table table-responsive col">
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Departamento</th>
						<th>Ciudad</th>
						<th>Fecha de Nacimiento</th>
						<th>Ocupación</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{perFiltrada.map((p) => (
						<ListaPersonas key={p.id} {...p} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Footer;
