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

