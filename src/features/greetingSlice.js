import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('http://localhost:3000/greetings');
    return response.json();
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: 'Click the button below to greet the world',
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingSlice.reducer;
