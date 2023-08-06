import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaCiudades: [],
	listaCiudadesPorDepa: [],
	idCiudad: 0,
};

export const ciudadSlice = createSlice({
	name: "ciudad",
	initialState,
	reducers: {
		guardarCiudades: (state, action) => {
			state.listaCiudades = action.payload;
			//console.log("Ciudades:", action.payload);
		},
		guardarCiudadesPorDepa: (state, action) => {
			state.listaCiudadesPorDepa = action.payload;
			//console.log("Nuevas ciudades por departamento:", action.payload);
		},
		guardarIdCiudad: (state, action) => {
			state.idCiudad= action.payload;
		},
	},
});

export const { guardarCiudades, guardarCiudadesPorDepa, guardarIdCiudad } = ciudadSlice.actions;
export default ciudadSlice.reducer;
