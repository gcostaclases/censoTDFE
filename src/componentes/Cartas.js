import CEstadisticas from "./CEstadisticas";
import CGraficoPersonasPorDepartamento from "./CGraficoPersonasPorDepartamento";
import CGraficoPorOcupacion from "./CGraficoPorOcupacion";
import CListadoDePersonas from "./CListadoDePersonas";
import CMapaUsuarioPorDepartamento from "./CMapaUsuarioPorDepartamento";

const Cartas = () => {
	return (
		<section className="row justify-content-center" id="pantalla-dashboard">
			<CListadoDePersonas />
			<CGraficoPersonasPorDepartamento />
			<CEstadisticas />
			<article className="col-10">
				<div className="row justify-content-between">
					<CGraficoPorOcupacion />
					<CMapaUsuarioPorDepartamento />
				</div>
			</article>
		</section>
	);
};

export default Cartas;
