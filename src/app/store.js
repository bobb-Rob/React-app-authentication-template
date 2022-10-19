import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../features/greetingSlice';

export const store = configureStore({
  reducer: {
    counter: greetingReducer,
  },
});
