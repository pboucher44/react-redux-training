import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    cartes: []
};

export const carteSlice = createSlice({
    name: 'carte',
    initialState,
    reducers: {
        createCarte: (state) => {
            if (state.cartes.length < 20) {
                const id = uuidv4();
                state.cartes.push({id:id, title:"Titre", text:"Je suis un text"});
            }
        },
        deleteCarte: (state, id) => {
            return {...state}.cartes.filter(carte => carte.id !== id.payload)
        },
    },
});

export const { createCarte, deleteCarte } = carteSlice.actions;

export const selectCarte = (state) => state.carte;

export default carteSlice.reducer;
