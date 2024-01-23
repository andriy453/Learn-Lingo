import { createSlice } from '@reduxjs/toolkit';
import { getAllTeachers } from './TeachersOperations';

const initialState = {
  teachers: [],
  teachersFilter: null,
  teachersFavorites: [],
  isLoading: false,
};

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTeachers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.teachers = payload;
      })
      .addCase(getAllTeachers.rejected, (state) => {
        state.isLoading = false;
      });
  },
  reducers: {
    addFavorites(state, action) {
      state.teachersFavorites.push(action.payload);
    },
    deleteFavorites(state, action) {
      const updatedFavorites = state.teachersFavorites.filter(
        (item) => item.avatar_url !== action.payload.avatar_url
      );
      state.teachersFavorites = updatedFavorites;
    },
    filterTeachers(state, action) {
                return {
        ...state,
        teachersFilter: action.payload,
                };
    },
      resetFilter(state) {
                return {
        ...state,
        teachersFilter: null,
      };

    },
  },
});

export const { addFavorites, deleteFavorites,filterTeachers,resetFilter } = teachersSlice.actions;

export const teachersReducer = teachersSlice.reducer;
