import { useDispatch, useSelector } from "react-redux";
import crearPersona from "../DTOs/CrearPersonaDTO";
import personaCensada from "../DTOs/PersonaCensadaDTO";
import { URLBASE } from "../store/store";
import { useState } from "react";
import {agregarPersona} from "../features/listadoPersonasSlice"


const AgregarPersona = () => {
  const idUsu = localStorage.getItem("id");  
  const nombrePer = useSelector((state) => state.personas.nombrePersona);
  const fNacPer = useSelector((state) => state.personas.fNacPersona);
  const depa = useSelector((state) => state.departamentos.idDepartamento);
  const ciudad = useSelector((state) => state.ciudades.idCiudad);
  const ocupacion = useSelector((state) => state.ocupaciones.idOcupacion);

  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const agregarPersonaOnClick = () => {
    console.log("idUsuario: " + idUsu);
    console.log("Nombre persona: " + nombrePer);
    console.log("id Depa:" + depa);
    console.log("idCiudad: " + ciudad);
    console.log("Fecha de nac: " + fNacPer);
    console.log("idOcupacion: " + ocupacion);

    if (
      idUsu === null &&
      nombrePer === "" &&
      fNacPer === null &&
      depa === null &&
      ciudad === null &&
      ocupacion === null
    ) {
      setError(true);
    } else {
      let objCrearPersonaDTO = new crearPersona(
        idUsu,
        nombrePer,
        depa,
        ciudad,
        fNacPer,
        ocupacion,
      );

      let apikey = localStorage.getItem("apikey");
      let idUsuario = localStorage.getItem("id");

      fetch(`${URLBASE}/personas.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: apikey,
          iduser: idUsuario,
        },
        body: JSON.stringify(objCrearPersonaDTO),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((personaAgregada) => {
          console.log(personaAgregada);
          let msg = personaAgregada.mensaje;
		      console.log(msg);
          let objPersonaCensadaDTO = new personaCensada(
            objCrearPersonaDTO.id = personaAgregada.idCenso,
            objCrearPersonaDTO.nombre,
            objCrearPersonaDTO.departamento,
            objCrearPersonaDTO.ciudad,
            objCrearPersonaDTO.fechaNacimiento,
            objCrearPersonaDTO.ocupacion,
            objCrearPersonaDTO.idUsuario,
            );
        
		  //Antes de hacer el dispatch hay que agregarle el id que 
		  //devolvió el fetch
		  dispatch(agregarPersona({...objPersonaCensadaDTO}));
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

/* idUsuario,
nombre,
departamento,
ciudad,
fechaNacimiento,
ocupacion */
