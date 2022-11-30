import { configureStore } from '@reduxjs/toolkit';
import camerasReducer from './camerasReducer';

const store = configureStore({
  reducer: camerasReducer,
});

export default store;
