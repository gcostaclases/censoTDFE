import { useSelector, useDispatch } from "react-redux";

import { URLBASE } from "../../../../store/store";
import { guardarTotalCensados } from "../../../../features/listadoPersonasSlice";
import { useEffect } from "react";

const EPorcentajeCensados = () => {
	const dispatch = useDispatch();

	const cantPer = useSelector((state) => state.personas.listaPersonas.length);
	const censadosTot = useSelector((state) => state.personas.totalCensados);

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/totalCensados.php`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => {
					return response.json();
				})
				.then((dataTotalCensados) => {
					console.log(dataTotalCensados);

					if (dataTotalCensados.codigo != 200) {
						console.log(dataTotalCensados.mensaje);
					} else {
						dispatch(guardarTotalCensados(dataTotalCensados.total));
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, []);

	// const censadosTotales = () => {
	// 	let apikey = localStorage.getItem("apikey");
	// 	let idUsuario = localStorage.getItem("id");

	// 	if (apikey != null) {
	// 		fetch(`${URLBASE}/totalCensados.php`, {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				apikey: apikey,
	// 				iduser: idUsuario,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				return response.json();
	// 			})
	// 			.then((dataTotalCensados) => {
	// 				console.log(dataTotalCensados);

	// 				if (dataTotalCensados.codigo != 200) {
	// 					console.log(dataTotalCensados.mensaje);
	// 				} else {
	// 					dispatch(guardarTotalCensados(dataTotalCensados.total));
	// 				}
	// 			})
	// 			.catch((error) => {
	// 				console.log(error);
	// 			});
	// 	}
	// };

	//console.log(`Censados Totales: ${censadosTot}`);
	let cuenta = (cantPer * 100) / censadosTot;
	//console.log(`Censados redond: ${cuenta.toFixed(2)}`);

	return (
		<div className="col-2 card">
			<div className="row card-header text-center">
				<h5 className="card-title col">Porcentaje Censados</h5>
			</div>
			<div className="row card-body text-center">
				<p>{cuenta.toFixed(2)} %</p>
			</div>
		</div>
	);
};

export default EPorcentajeCensados;
