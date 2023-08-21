import ECensadosEnMontevideo from "./Estadisticas/ECensadosEnMontevideo";
import ECensadosRestoDelPais from "./Estadisticas/ECensadosRestoDelPais";
import ECensadosTotales from "./Estadisticas/ECensadosTotales";
import EPorcentajeCensados from "./Estadisticas/EPorcentajeCensados";
import ETiempoRestante from "./Estadisticas/ETiempoRestante";

const CEstadisticas = () => {
	return (
		<article className="col-10" id="cartaEstadisticas">
			<div className="row justify-content-between">
				<ECensadosTotales />
				<EPorcentajeCensados />
				<ECensadosEnMontevideo />
				<ECensadosRestoDelPais />
				<ETiempoRestante />
			</div>
		</article>
	);
};

export default CEstadisticas;
