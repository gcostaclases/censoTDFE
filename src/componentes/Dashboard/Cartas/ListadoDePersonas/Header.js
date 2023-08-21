import { useRef } from "react";
import { useDispatch } from "react-redux";
import {
	guardarNombreP,
	guardarfNacP,
} from "../../../../features/listadoPersonasSlice";
import SelectOcupaciones from "./AgregarPersona/SelectOcupaciones";
import Ciudades from "./AgregarPersona/Ciudades";
import Departamentos from "./AgregarPersona/Departamentos";
import AgregarPersona from "./AgregarPersona/AgregarPersona";

const Header = () => {
	const dispatch = useDispatch();

	const txtNombre = useRef(null);
	const fNac = useRef(null);

	// FUNCION QUE GUARDA EL NOMBRE EN EL STORE
	const guardarNombre = () => {
		let nombre = txtNombre.current.value;
		dispatch(guardarNombreP(nombre));
		console.log(nombre);
	};

	// FUNCION QUE GUARDA LA FECHA DE NACIMIENTO EN EL STORE
	const guardarFNac = () => {
		let fecha = fNac.current.value;
		dispatch(guardarfNacP(fecha));
		console.log(fecha);
	};

	return (
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
						<SelectOcupaciones />
					</div>
					<AgregarPersona />
				</div>
			</div>
		</div>
	);
};

export default Header;
