import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  dogs: [],
  images: []
};

export const dogsSlice = createSlice({
  name: 'dogs',
  initialState,
  reducers: {
    setDogsData: (state, action) => {
      state.dogs = action.payload.dogs ?? state.dogs;
      state.images = action.payload.images ?? state.images;
    },
  }
});

export const { setDogsData } = dogsSlice.actions;

export default dogsSlice.reducer;
