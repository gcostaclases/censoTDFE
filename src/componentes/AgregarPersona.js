import { useDispatch, useSelector } from "react-redux";

const AgregarPersona = () => {
	const nombrePer = useSelector((state) => state.personas.nombrePersona);
	const fNacPer = useSelector((state) => state.personas.fNacPersona);

	const agregarPersonaOnClick = () => {
		console.log(nombrePer);
		console.log(fNacPer);
	};

	return (
		<input
			type="button"
			value="Agregar Persona"
			className="col btn btn-light"
			onClick={agregarPersonaOnClick}
		/>
	);
};

export default AgregarPersona;
