import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaPersonas: [],
	listaPersonasFiltradas: [],
	nombrePersona: "",
	fNacPersona: new Date().toISOString().split('T')[0],
};

export const listadoPersonasSlice = createSlice({
	name: "persona",
	initialState,
	reducers: {
		guardarPersonas: (state, action) => {
			state.listaPersonas = action.payload;
		},
		guardarPersonasFiltradas: (state, action) => {
			state.listaPersonasFiltradas = action.payload;
		},
		guardarNombreP: (state, action) => {
			state.nombrePersona = action.payload;
		},
		guardarfNacP: (state, action) => {
			state.fNacPersona = action.payload;
		},
		agregarPersona:(state, action) =>{
            state.listaPersonas.push(action.payload)
        }
	},
});

export const { guardarPersonas, guardarPersonasFiltradas, guardarNombreP, guardarfNacP, agregarPersona } =
	listadoPersonasSlice.actions;
export default listadoPersonasSlice.reducer;
