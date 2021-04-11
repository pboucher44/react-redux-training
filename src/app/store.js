import { configureStore } from '@reduxjs/toolkit';
import tableauReducer from '../features/Tableau/tableauSlice';

export const store = configureStore({
  reducer: {
    tableau: tableauReducer
  },
});
