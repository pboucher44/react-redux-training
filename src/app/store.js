import { configureStore } from '@reduxjs/toolkit';
import tableauReducer from '../features/Tableau/tableauSlice';
import carteReducer from '../features/Cartes/CarteSlice';

export const store = configureStore({
  reducer: {
    tableau: tableauReducer,
    carte: carteReducer
  },
});
