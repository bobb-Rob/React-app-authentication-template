import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from '../features/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
