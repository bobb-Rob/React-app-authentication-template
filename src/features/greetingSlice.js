import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

 export const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch('/greetings');
    return response.json();
  }
)

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: 'Click the button below to greet the world',
  reducers: {},
  extraReducers: {
    [fetchGreeting.fulfilled]: (state, action) => {
      return action.payload;
    }
  },
});

export default greetingSlice.reducer;


