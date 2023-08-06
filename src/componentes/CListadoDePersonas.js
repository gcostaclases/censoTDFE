import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { URLBASE } from "../store/store";
import {
	guardarPersonas,
	guardarPersonasFiltradas,
	guardarNombreP,
	guardarfNacP,
} from "../features/listadoPersonasSlice";

import Ocupaciones from "./Ocupaciones";
import Ciudades from "./Ciudades";
import Departamentos from "./Departamentos";
import AgregarPersona from "./AgregarPersona";

const ListadoDePersonas = () => {
	const dispatch = useDispatch();

	const per = useSelector((state) => state.personas.listaPersonas);

	//const fechaN = useSelector((state) => state.personas.fNacPersona);
	//const [fechaSeleccionada, setfechaSeleccionada] = useState(fechaN);

	const txtNombre = useRef(null);
	const fNac = useRef(null);

	const guardarNombre = () => {
		let nombre = txtNombre.current.value;
		dispatch(guardarNombreP(nombre));
		console.log(nombre);
	};
	//console.log(txtNombre);

	const guardarFNac = () => {
		let fecha = fNac.current.value;
		dispatch(guardarfNacP(fecha));
		console.log(fecha);
	};
	//console.log(fNac);

	const filtrarPersonasPorOcupacion = (evento) => {
		let ocupacionSeleccionada = evento.target.value;
		console.log("Ocupa seleccionada: " + ocupacionSeleccionada);

		let listaPerFiltradaPorOcupacion = per.filter(
			(p) => p.ocupacion == ocupacionSeleccionada
		);
		console.log("Filtrados: " + { ...listaPerFiltradaPorOcupacion[0] });
		dispatch(guardarPersonasFiltradas({ ...listaPerFiltradaPorOcupacion }));
	};

	useEffect(() => {
		let apikey = localStorage.getItem("apikey");
		let idUsuario = localStorage.getItem("id");

		if (apikey != null) {
			fetch(`${URLBASE}/personas.php?idUsuario=${idUsuario}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					apikey: apikey,
					iduser: idUsuario,
				},
			})
				.then((response) => response.json())
				.then((dataListaPersonas) => {
					console.log(dataListaPersonas);

					if (dataListaPersonas.codigo != 200) {
						// alert(dataListaPersonas.mensaje);
						console.log(dataListaPersonas.mensaje);
					} else {
						dispatch(guardarPersonas(dataListaPersonas.personas));
					}
				})
				.catch((error) => console.log(error));
		}
	}, []);

	return (
		<article className="col-10 card" id="cartaListadoPersonas">
			<div className="row card-header justify-content-between">
				<h4 className="card-title col">Listado de personas</h4>

				<div className="text-end col dropdown">
					<button
						type="button"
						className="btn btn-dark dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						data-bs-auto-close="outside"
					>
						Agregar Persona
					</button>
					<div className="row dropdown-menu dropdown-menu-dark p-4">
						<div className="col mb-3">
							<label htmlFor="txtNombrePersona" className="form-label">
								Nombre
							</label>
							<input
								type="text"
								className="form-control"
								id="txtNombrePersona"
								placeholder="Lola"
								ref={txtNombre}
								onBlur={guardarNombre}
							/>
						</div>
						<div className="col mb-3">
							<label htmlFor="slcDepartamentos" className="form-label">
								Departamento
							</label>
							<Departamentos />
						</div>
						<div className="col mb-3">
							<label htmlFor="slcCiudades" className="form-label">
								Ciudades
							</label>
							<Ciudades />
						</div>
						<div className="col mb-3">
							<label
								htmlFor="fNacimiento"
								className="form-label input-group date"
							>
								Fecha de Nacimiento
							</label>
							<input
								id="fNacimiento"
								className="form-control"
								type="date"
								ref={fNac}
								onBlur={guardarFNac}
							/>
						</div>
						<div className="col mb-3">
							<label htmlFor="slcOcupaciones" className="form-label">
								Ocupación
							</label>
							<Ocupaciones />
						</div>
						<AgregarPersona />
					</div>
				</div>
			</div>

			<div className="card-body row">
				<select className="form-select" onChange={filtrarPersonasPorOcupacion}>
					<option defaultValue selected disabled>
						Filtrar por ocupación
					</option>
					<option value="1">Empleado dependiente</option>
					<option value="2">Empleado independiente</option>
					<option value="3">Empleado público</option>
					<option value="4">Comerciante</option>
					<option value="5">Estudiante</option>
					<option value="7">Emprendedor</option>
					<option value="8">No trabaja</option>
				</select>
			</div>

			<div className="card-footer row">
				<table className="table table-responsive col">
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Departamento</th>
							<th>Ciudad</th>
							<th>Fecha de Nacimiento</th>
							<th>Ocupación</th>
							<th>Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{per.map((p) => (
							<tr key={p.id}>
								<td>{p.nombre}</td>
								<td>{p.departamento}</td>
								<td>{p.ciudad}</td>
								<td>{p.fechaNacimiento}</td>
								<td>{p.ocupacion}</td>
								<td>Icono Borrar</td>
							</tr>
						))}
						{/* <tr>
							<td>Pepito Gonzalez</td>
							<td>Montevideo</td>
							<td>Montevideo</td>
							<td>05/03/1985</td>
							<td>Estudiante</td>
							<td>Icono Borrar</td>
						</tr> */}
					</tbody>
				</table>
			</div>
		</article>
	);
};

export default ListadoDePersonas;
