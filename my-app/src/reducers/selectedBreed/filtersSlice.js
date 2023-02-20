import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: [
    {
      breed: 'all',
      subBreed: 'all',
    },
    {
      breed: 'bulldog',
      'subBreed': 'boston',
    }
  ],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addBreedFilter: (state, action) => {
      state.filters.push(action.payload.filter);
    },
    changeBreedFilter: (state, action) => {
      state.filters.push(action.payload.filter);
    },
    resetBreedFilter: (state, action) => {
      state = initialState;
    },
  }
});

// Action creators are generated for each case reducer function
export const { addBreedFilter, changeBreedFilter, resetBreedFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
