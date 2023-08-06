import Menu from "./Menu";

const ContenedorHeader = () => {
	return (
		<header
			className="container-fluid bg-dark border-bottom border-bottom-dark"
			data-bs-theme="dark">
			<Menu />
		</header>
	);
};

export default ContenedorHeader;
