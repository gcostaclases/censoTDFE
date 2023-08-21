import CEstadisticas from "./Dashboard/Cartas/CEstadisticas";
import CGraficoPersonasPorDepartamento from "./Dashboard/Cartas/CGraficoPersonasPorDepartamento";
import CListadoDePersonas from "./Dashboard/Cartas/CListadoDePersonas";
import CGraficoOcupacionYMapaUsuarioPorDepa from "./Dashboard/Cartas/CGraficoOcupacionYMapaUsuarioPorDepa";

const Cartas = () => {
	return (
		<section className="row justify-content-center" id="pantalla-dashboard">
			<CListadoDePersonas />
			<CGraficoPersonasPorDepartamento />
			<CEstadisticas />
			<CGraficoOcupacionYMapaUsuarioPorDepa />
		</section>
	);
};

export default Cartas;
