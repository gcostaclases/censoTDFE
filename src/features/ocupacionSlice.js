import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	listaOcupaciones: [],
};

export const ocupacionSlice = createSlice({
	name: "ocupacion",
	initialState,
	reducers: {
		guardarOcupaciones: (state, action) => {
			state.listaOcupaciones = action.payload;
		},
	},
});

export const { guardarOcupaciones } = ocupacionSlice.actions;
export default ocupacionSlice.reducer;
