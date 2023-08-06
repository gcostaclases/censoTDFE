import Cartas from "./Cartas";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	let navigate = useNavigate();

	useEffect(() => {
		// let apikey = localStorage.getItem("apikey");
		// let idUsuario = localStorage.getItem("id");

		if (localStorage.getItem("apikey") === null) {
			navigate("/");
		}
	}, []);

	return <Cartas />;
};

export default Dashboard;
