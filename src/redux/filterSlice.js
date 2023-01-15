import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { name: '' },
  reducers: {
    setFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(value) {
        return {
          payload: {
            name: value,
          },
        };
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
