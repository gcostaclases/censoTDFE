import { useSelector } from "react-redux";
import ListaPersonas from "./ListaPersonas";

const Footer = () => {
	const per = useSelector((state) => state.personas.listaPersonas);

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
					{per.map((p) => (
						<ListaPersonas key={p.id} {...p} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Footer;
