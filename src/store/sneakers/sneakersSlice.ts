import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sneakers: [],
  isLoading: false,
  error: '',
};

export const sneakersReduce = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {},
});

export default sneakersReduce.reducer;