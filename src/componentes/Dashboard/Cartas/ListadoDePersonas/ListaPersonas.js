const ListaPersonas = ({
	id,
	nombre,
	departamento,
	ciudad,
	fechaNacimiento,
	ocupacion,
}) => {
	return (
		<tr key={id}>
			<td>{nombre}</td>
			<td>{departamento}</td>
			<td>{ciudad}</td>
			<td>{fechaNacimiento}</td>
			<td>{ocupacion}</td>
			<td>Icono Borrar</td>
		</tr>
	);
};

export default ListaPersonas;
