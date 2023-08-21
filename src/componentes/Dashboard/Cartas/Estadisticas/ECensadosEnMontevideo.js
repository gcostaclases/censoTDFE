import { useSelector } from "react-redux";

const ECensadosEnMontevideo = () => {
	const per = useSelector((state) => state.personas.listaPersonas);

	const listaPerFiltradaPorMontevideo = per.filter(
		(p) => p.departamento === 3218
	);
	//console.log(`Cantidad m: ${listaPerFiltradaPorMontevideo.length}`);

	return (
		<div className="col-2 card">
			<div className="row card-header text-center">
				<h5 className="card-title col">Censados en Montevideo</h5>
			</div>
			<div className="row card-body text-center">
				<p>{listaPerFiltradaPorMontevideo.length}</p>
			</div>
		</div>
	);
};

export default ECensadosEnMontevideo;
