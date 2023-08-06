import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaDepartamentos: [],
	idDepartamento: 0,
};

export const departamentoSlice = createSlice({
	name: "departamento",
	initialState,
	reducers: {
		guardarDepartamentos: (state, action) => {
			state.listaDepartamentos = action.payload;
		},
		guardarIdDepartamento: (state, action) => {
			state.idDepartamento = action.payload;
		},
	},
});

export const { guardarDepartamentos, guardarIdDepartamento } =
	departamentoSlice.actions;
export default departamentoSlice.reducer;

/* 
Me va a devolver un objeto que tiene una propiedad actions y
una propiedad reducers
(contadorSlice se va a transformar en un obj con una propiedad actions y otra reducers)
*/

/*
Nos tenemos que acordar que todos los reducer que generemos lo tenemos
que sumar a este listado
*/
