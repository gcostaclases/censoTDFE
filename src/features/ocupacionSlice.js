import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaOcupaciones: [],
	idOcupacion: 0,

};

export const ocupacionSlice = createSlice({
	name: "ocupacion",
	initialState,
	reducers: {
		guardarOcupaciones: (state, action) => {
			state.listaOcupaciones = action.payload;
		},
		guardarIdOcupacion: (state, action) => {
			state.idOcupacion = action.payload;
		},
	},
});

export const { guardarOcupaciones, guardarIdOcupacion } = ocupacionSlice.actions;
export default ocupacionSlice.reducer;
