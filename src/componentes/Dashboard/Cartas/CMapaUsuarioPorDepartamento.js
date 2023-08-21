import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
	iconUrl: require("leaflet/dist/images/marker-icon.png"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// +++++++ FALTA PROTEGER LA RUTA+++++++

const CMapaUsuarioPorDepartamento = () => {
	const personasCensadas = useSelector((state) => state.personas.listaPersonas);
	const departamentos = useSelector(
		(state) => state.departamentos.listaDepartamentos
	);

	//Guardo la cantidad de personas x depa más la longitud y la latitud de cada depa
	let dataMapa = [{ idDepa: 0, latitud: 0, longitud: 0, cantPersonas: 0 }];

	dataMapa = departamentos.map((d) => {
		return {
			idDepa: d.id,
			latitud: d.latitud,
			longitud: d.longitud,
			cantPersonas: 0,
		};
	});

	//Guardo los id de los departamentdos con personas censadas
	const idDepartamentosPersonasCensadas = personasCensadas.map(
		(persona) => persona.departamento
	);

	//Lógica para incrementar cantPersonas en el objeto departamento en dataMapa
	//cuando se encuentra un departamento censado en el array idDepartamentosPersonasCensadas
	idDepartamentosPersonasCensadas.forEach((depaId) => {
		const departamentoEnDataMapa = dataMapa.find((d) => d.idDepa === depaId);
		if (departamentoEnDataMapa !== undefined) {
			departamentoEnDataMapa.cantPersonas += 1;
		}
	});

	// dataMapa.forEach((departamento) => {
	// 	console.log(`ID del Departamento: ${departamento.idDepa},
	// Cantidad de Personas Censadas: ${departamento.cantPersonas}
	// Latitud: ${departamento.latitud}
	// Longitud: ${departamento.longitud}
	// `);
	// });

	return (
		<article className="card col-5">
			<div className="card-header row">
				<h4 className="card-title col">Mapa Usuario por Departamento</h4>
			</div>

			<div className="card-body row">
				<MapContainer
					center={[-33, -56]}
					zoom={6}
					scrollWheelZoom={false}
					style={{ height: "400px", width: "100%" }}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{dataMapa.map((departamento) => (
						<Marker
							key={departamento.idDepa}
							position={[departamento.latitud, departamento.longitud]}
						>
							<Popup>
								<div>
									<p>Cantidad censados: {departamento.cantPersonas}</p>
								</div>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</article>
	);
};

export default CMapaUsuarioPorDepartamento;
