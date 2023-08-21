import { useSelector } from "react-redux";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

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

const CGraficoPersonasPorDepartamento = () => {
	const personas  = useSelector((state) => state.personas.listaPersonas);
	const departamentos  = useSelector((state) => state.departamentos.listaDepartamentos);
	//console.log("LISTA DEPART: " + JSON.stringify(depart));

	// let labels = [];
	// let data = [];
	// let nombresDepartamentos = [];

	// const idDepartamentosPersonasCensadas = per.map(
	// 	(persona) => persona.departamento
	// );

	// let departamentosPersonasCensadas = [];

	// depart.forEach((depa) => {
	// 	if (idDepartamentosPersonasCensadas.find((d) => depa.id == d)) {
	// 		departamentosPersonasCensadas.push(depa);
	// 	}
	// });
	// console.log(
	// 	"Depas enteros censados " + JSON.stringify(departamentosPersonasCensadas)
	// );

	// console.log(
	// 	"Cant depas enteros censados " + departamentosPersonasCensadas.length
	// );

	// departamentosPersonasCensadas.forEach((depa) => {
	// 	if (idDepartamentosPersonasCensadas.find((d) => depa.id == d)) {
	// 		nombresDepartamentos.push(depa.nombre);
	// 	}
	// });
	// //console.log("Nombre de depas censados" + nombresDepartamentos);

	// idDepartamentosPersonasCensadas.forEach((depa) => {
	// 	//Si no encuentro el departamento
	// 	if (labels.find((d) => depa == d) == undefined) {
	// 		labels.push(depa);
	// 		data.push(1);
	// 	} else {
	// 		//Data en esta pos suma 1
	// 		data[labels.indexOf(depa)] += 1;
	// 	}
	// });

	const idDepartamentosPersonasCensadas = personas.map(
		(persona) => persona.departamento
	);
	
	const nombresDepartamentos = [];
	const cantPersonasCensadas = [];

	//Por cada depa en en el array de departamentos
	departamentos.forEach((depa) => {
		//Si el depa es un departamento con personas censadas 
		//(el id del depa esta en el array idDepartamentosPersonasCensadas )
		if (idDepartamentosPersonasCensadas.includes(depa.id)) {
			//Pushea el nombre al array de nombres
			nombresDepartamentos.push(depa.nombre);

			// Y además cuenta la cantidad de personas censadas por departamento censado
			const cantPersonas = personas.filter((persona) => persona.departamento === depa.id).length;
			cantPersonasCensadas.push(cantPersonas);
		}
	});

	return (
		<article className="card col-10" id="cartaGraficoPPD">
			<div className="card-header row">
				<h4 className="card-title col-5">Gráfico Personas por Departamento</h4>
			</div>

			<div className="card-body row">
				<Bar
					options={options}
					data={{
						labels: nombresDepartamentos,
						datasets: [
							{
								label: "Departamentos",
								data: cantPersonasCensadas,
								backgroundColor: "rgba(255, 99, 132, 0.5)",
							},
						],
					}}
				/>
			</div>
		</article>
	);
};

export default CGraficoPersonasPorDepartamento;
