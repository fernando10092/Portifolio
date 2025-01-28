import { createSlice } from "@reduxjs/toolkit";

//TIPO
type lista = {
    valor: number,
    vl2: number,
}

//INICIAL
const initialState: lista = {
    valor: 0,
    vl2: 1,
}

//SLICE
export const contadorSlice = createSlice({
    name: 'contador',
    initialState: initialState,
    reducers: {
        contagem: (state)=>{
            state.valor += 1;
        },

        somas: (state, action)=>{
            state.vl2 += action.payload;
        }
    }
})

export const { contagem, somas } = contadorSlice.actions

export default contadorSlice.reducer