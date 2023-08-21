import { useRef, useState } from "react";
import userLogin from "../DTOs/LoginDTO";
import { URLBASE } from "../store/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
	//HOOKS
	const user = useRef(null);
	const pass = useRef(null);
	let navigate = useNavigate();
	const [error, setError] = useState(false);
	const [errorP, setErrorP] = useState("");

	//Estado para habilitar y deshabilitar el botón de Ingresar
	const [botonActivo, setBotonActivo] = useState(false);

	const handleBoton = () => {
		if (user !== null || pass !== null) {
			setBotonActivo(true);
		} else {
			setBotonActivo(false);
		}
	};

	const ingresar = () => {
		const userCampo = user.current.value;
		const passCampo = pass.current.value;

		if (userCampo === "" && passCampo === "") {
			setError(true);
		} else {
			let objLoginDTO = new userLogin(userCampo, passCampo);

			fetch(`${URLBASE}/login.php`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(objLoginDTO),
			})
				.then((response) => {
					//console.log(response);
					return response.json();
				})
				.then((usuarioLogueado) => {
					console.log(usuarioLogueado);
					let msgError = usuarioLogueado.mensaje;
					setErrorP(msgError);

					if (usuarioLogueado.codigo != 200) {
						setError(true);
					} else {
						// SETEO DE APIKEY E IDUSUARIO
						//console.log("hola");
						localStorage.setItem("apikey", usuarioLogueado.apiKey);
						localStorage.setItem("id", usuarioLogueado.id);

						navigate("/dashboard");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	return (
		<section
			className="row text-center justify-content-center align-items-center"
			id="pantalla-login"
		>
			<h1 className="col-12">Login</h1>
			<div className="col-6">
				<div className="mb-3">
					<label htmlFor="txtUser" className="form-label">
						Usuario
					</label>
					<input
						type="text"
						required
						className="form-control"
						id="txtUser"
						ref={user}
						onChange={handleBoton}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="txtPassword" className="form-label">
						Contraseña
					</label>
					<input
						type="password"
						required
						className="form-control"
						id="txtPassword"
						ref={pass}
						onChange={handleBoton}
					/>
				</div>
				<input
					type="button"
					className="btn btn-dark"
					value="Ingresar"
					onClick={ingresar}
					disabled={!botonActivo}
				/>
			</div>
			{error && <p>{errorP}</p>}

			<p id="datosParaLoguearse">
				Datos para loguearse: <br />
				user: lolam <br />
				pass: lola1234
			</p>
		</section>
	);
};

export default Login;
