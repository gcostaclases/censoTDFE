import { useSelector } from "react-redux";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Gráfico Personas por Departamento",
		},
	},
};

const CGraficoPorOcupacion = () => {
	const personas = useSelector((state) => state.personas.listaPersonas);
	const ocupaciones = useSelector(
		(state) => state.ocupaciones.listaOcupaciones
	);

	const idOcupacionesPersonasCensadas = personas.map(
		(persona) => persona.ocupacion
	);

	const nombresOcupaciones = [];
	const cantPersonasCensadas = [];

	//Por cada ocupacion en en el array de ocupaciones
	ocupaciones.forEach((ocupa) => {
		//Si el ocupa es una ocupacion con personas censadas (el id del ocupa esta en el array idOcupacionesPersonasCensadas )
		if (idOcupacionesPersonasCensadas.includes(ocupa.id)) {
			//Pushea el nombre al array de nombres
			nombresOcupaciones.push(ocupa.ocupacion);

			// Y además cuenta la cantidad de personas censadas por ocupacion censada
			const cantPersonas = personas.filter(
				(persona) => persona.ocupacion === ocupa.id
			).length;
			cantPersonasCensadas.push(cantPersonas);
		}
	});

	return (
		<article className="card col-5">
			<div className="card-header row">
				<h4 className="card-title col">Gráfico por ocupación</h4>
			</div>
			<div className="card-body row">
				<Pie
					id="graficoPorOcupacion"
					// options={options}
					data={{
						labels: nombresOcupaciones,
						datasets: [
							{
								label: "Ocupaciones",
								data: cantPersonasCensadas,
								backgroundColor: [
									"rgba(255, 99, 132, 0.2)",
									"rgba(54, 162, 235, 0.2)",
									"rgba(255, 206, 86, 0.2)",
									"rgba(75, 192, 192, 0.2)",
									"rgba(153, 102, 255, 0.2)",
									"rgba(255, 159, 64, 0.2)",
									"rgba(64, 232, 255, 0.2)",
								],
								borderColor: [
									"rgba(255, 99, 132, 1)",
									"rgba(54, 162, 235, 1)",
									"rgba(255, 206, 86, 1)",
									"rgba(75, 192, 192, 1)",
									"rgba(153, 102, 255, 1)",
									"rgba(255, 159, 64, 1)",
									"rgba(64, 232, 255, 1)",
								],
								borderWidth: 1,
							},
						],
					}}
				/>
			</div>
		</article>
	);
};

export default CGraficoPorOcupacion;
