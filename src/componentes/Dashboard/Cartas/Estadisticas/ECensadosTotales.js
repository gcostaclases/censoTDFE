import { useSelector } from "react-redux";

const ECensadosTotales = () => {
	const cantPer = useSelector((state) => state.personas.listaPersonas.length);

	return (
		<div className="col-2 card">
			<div className="row card-header text-center">
				<h5 className="card-title col">Censados Totales</h5>
			</div>
			<div className="row card-body text-center">
				<p>{cantPer}</p>
			</div>
		</div>
	);
};

export default ECensadosTotales;
