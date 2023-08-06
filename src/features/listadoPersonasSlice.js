import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaPersonas: [],
	nombrePersona: "",
	fNacPersona: new Date().toISOString().split('T')[0],
	//agregarPersona: null,
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
		agregarPersona:(state, action) =>{
            state.listaTareas.push(action.payload)
        }
	},
});

export const { guardarPersonas, guardarNombreP, guardarfNacP, agregarPersona } =
	listadoPersonasSlice.actions;
export default listadoPersonasSlice.reducer;
