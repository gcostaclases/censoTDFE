import { NavLink } from "react-router-dom";

const Menu = () => {
	const logOut = () => {
		localStorage.clear();
	};

	return (
		<div className="container">
			<nav className="row navbar navbar-expand">
				<NavLink
					to="/"
					className="col-1 navbar-brand"
					aria-current="page"
					id="logoCenso">
					Censo
				</NavLink>
				<div
					className="col-10 collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								to="/"
								className="nav-link"
								aria-current="page"
								id="btnLogin">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/registro"
								className="nav-link"
								aria-current="page"
								id="btnRegistro">
								Registro
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								to="/dashboard"
								className="nav-link"
								aria-current="page"
								id="btnDashboard">
								Dashboard
							</NavLink>
						</li>
					</ul>
				</div>

				<ul className="col-1 navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
					<li className="nav-item">
						<NavLink
							to="/"
							className="nav-link"
							aria-current="page"
							id="btnLogout"
							onClick={logOut}>
							Log Out
						</NavLink>
					</li>
					{/* <p className="nav-item">Log Out</p> */}
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
