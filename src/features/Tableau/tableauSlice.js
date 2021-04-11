import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    colonnes: []
};

export const tableauSlice = createSlice({
    name: 'tableau',
    initialState,
    reducers: {
        createColonne: (state) => {
            const id = uuidv4();
            state.colonnes.push({id:id, title:"New column"});
        },
        deleteColonne: (state, id) => {
            return {
                ...state,
                colonnes: state.colonnes.filter(colonne => colonne.id !== id.payload)
            }
        },
    },
});

export const { createColonne, deleteColonne } = tableauSlice.actions;

export const selectTableau = (state) => state.tableau;

export default tableauSlice.reducer;
