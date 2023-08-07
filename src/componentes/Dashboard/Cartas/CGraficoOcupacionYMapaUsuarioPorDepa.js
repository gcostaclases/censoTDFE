import CGraficoPorOcupacion from "./CGraficoPorOcupacion";
import CMapaUsuarioPorDepartamento from "./CMapaUsuarioPorDepartamento";

const CGraficoOcupacionYMapaUsuarioPorDepa = () => {
	return (
		<article className="col-10">
			<div className="row justify-content-between">
				<CGraficoPorOcupacion />
				<CMapaUsuarioPorDepartamento />
			</div>
		</article>
	);
};

export default CGraficoOcupacionYMapaUsuarioPorDepa;
