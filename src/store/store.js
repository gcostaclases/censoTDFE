import { configureStore } from "@reduxjs/toolkit";
/* 
Le inventamos un nombre (alias) a lo que fue el
export del reducer
*/
import usuarioReducer from "../features/usuarioSlice";
import departamentoReducer from "../features/departamentoSlice";
import ciudadesReducer from "../features/ciudadSlice";
import listadoPersonasReducer from "../features/listadoPersonasSlice";
import listadoOcupacionesReducer from "../features/ocupacionSlice";

export const URLBASE = "https://censo.develotion.com";

export const store = configureStore({

	reducer: {
		usuario: usuarioReducer,
		departamentos: departamentoReducer,
		ciudades: ciudadesReducer,
		personas: listadoPersonasReducer,
		ocupaciones: listadoOcupacionesReducer,
	},
});
