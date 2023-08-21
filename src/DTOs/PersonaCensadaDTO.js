export default class PersonaCensadaDTO {
  constructor(
    id,
    nombre,
    departamento,
    ciudad,
    fechaNacimiento,
    ocupacion,
    idUsuario
  ) {
    this.id = id;
    this.nombre = nombre;
    this.departamento = departamento;
    this.ciudad = ciudad;
    this.fechaNacimiento = fechaNacimiento;
    this.ocupacion = ocupacion;
    this.idUsuario = idUsuario;
  }
}
