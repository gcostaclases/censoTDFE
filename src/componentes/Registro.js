import { useRef, useState } from "react";
import userRegistro from "../DTOs/RegistroDTO";
import { URLBASE } from "../store/store";

const Registro = () => {
  //HOOKS
  const user = useRef(null);
  const pass = useRef(null);
  const [error, setError] = useState(false);
  const [errorP, setErrorP] = useState("");

  const registrar = () => {
    const userCampo = user.current.value;
    const passCampo = pass.current.value;

    if (userCampo === "" && passCampo === "") {
      setError(true);
    } else {
      let objRegistroDTO = new userRegistro(userCampo, passCampo);

      fetch(`${URLBASE}/usuarios.php`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objRegistroDTO),
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((usuarioRegistrado) => {
          console.log(usuarioRegistrado);
          let msgError = usuarioRegistrado.mensaje;
          setErrorP(msgError);

          if (usuarioRegistrado.codigo != 200) {
            //alert(msgError);
            setError(true);
          } else {
            alert("Alta correcta");
            console.log("hola");
            localStorage.setItem("apikey", usuarioRegistrado.apiKey);
            localStorage.setItem("id", usuarioRegistrado.id);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <section
      className="row text-center justify-content-center"
      id="pantalla-registro"
    >
      <h1 className="col-12">Registro</h1>
      <div className="col-6">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            required
            className="form-control"
            id="registroUsuario"
            ref={user}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            required
            className="form-control"
            id="registroPassword"
            ref={pass}
          />
        </div>
        <input
          type="button"
          className="btn btn-dark"
          value="Registrar"
          onClick={registrar}
        />
      </div>
      {error && <p>{errorP}</p>}
    </section>
  );
};

export default Registro;
