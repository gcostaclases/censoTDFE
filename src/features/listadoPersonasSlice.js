import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaPersonas: [],
	nombrePersona: "",
	fNacPersona: "",
};

export const listadoPersonasSlice = createSlice({
	name: "persona",
	initialState,
	reducers: {
		guardarPersonas: (state, action) => {
			state.listaPersonas = action.payload;
		},
		guardarNombreP: (state, action) => {
			state.nombrePersona = action.payload;
		},
		guardarfNacP: (state, action) => {
			state.fNacPersona = action.payload;
		},
	},
});

export const { guardarPersonas, guardarNombreP, guardarfNacP } =
	listadoPersonasSlice.actions;
export default listadoPersonasSlice.reducer;
