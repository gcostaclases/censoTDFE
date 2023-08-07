import ECensadosRestoDelPais from "../../ECensadosRestoDelPais";
import ECensadosTotales from "../../ECensadosTotales";
import EPorcentajeCensados from "../../ECensadosTotales";
import ETiempoRestante from "../../ETiempoRestante";

const CEstadisticas = () => {
	return (
		<article className="col-10" id="cartaEstadisticas">
			<div className="row justify-content-between">
				<ECensadosTotales />
				<EPorcentajeCensados />
				<ECensadosRestoDelPais />
				<ETiempoRestante />
			</div>
		</article>
	);
};

export default CEstadisticas;
