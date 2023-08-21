import { useSelector } from "react-redux";

const ECensadosRestoDelPais = () => {
	const per = useSelector((state) => state.personas.listaPersonas);

	const listaPerFiltradaPorTodoMenosMontevideo = per.filter(
		(p) => p.departamento !== 3218
	);
	//console.log(`Cantidad m: ${listaPerFiltradaPorTodoMenosMontevideo.length}`);

	return (
		<div className="col-2 card">
			<div className="row card-header text-center">
				<h5 className="card-title col">Censados Resto del País</h5>
			</div>
			<div className="row card-body text-center">
				<p>{listaPerFiltradaPorTodoMenosMontevideo.length}</p>
			</div>
		</div>
	);
};

export default ECensadosRestoDelPais;
