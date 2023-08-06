import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaCiudades: [],
	listaCiudadesPorDepa: [],
};

export const ciudadSlice = createSlice({
	name: "ciudad",
	initialState,
	reducers: {
		guardarCiudades: (state, action) => {
			state.listaCiudades = action.payload;
			console.log("Ciudades:", action.payload);
		},
		guardarCiudadesPorDepa: (state, action) => {
			state.listaCiudadesPorDepa = action.payload;
			console.log("Nuevas ciudades por departamento:", action.payload);
		},
	},
});

export const { guardarCiudades, guardarCiudadesPorDepa } = ciudadSlice.actions;
export default ciudadSlice.reducer;
