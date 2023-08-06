import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	usu: null,
};

export const usuarioSlice = createSlice({
	name: "usuario",
	initialState,
	reducers: {
		guardarRespuesta: (state, action) => {
			state.usu = action.payload;
		},
	},
});

export const { guardarRespuesta } = usuarioSlice.actions;
export default usuarioSlice.reducer;

/* 
Me va a devolver un objeto que tiene una propiedad actions y
una propiedad reducers
(contadorSlice se va a transformar en un obj con una propiedad actions y otra reducers)
*/

/*
Nos tenemos que acordar que todos los reducer que generemos lo tenemos
que sumar a este listado
*/
