import { configureStore } from '@reduxjs/toolkit';
import mealReducer from '../slice/index';

export default configureStore({
  reducer: {
    meal: mealReducer,
  },
});