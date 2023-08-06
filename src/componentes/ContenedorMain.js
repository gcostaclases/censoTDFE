import { Outlet } from "react-router-dom";

const ContenedorMain = () => {
	return (
		<main className="container">
			<Outlet />
		</main>
	);
};

export default ContenedorMain;
