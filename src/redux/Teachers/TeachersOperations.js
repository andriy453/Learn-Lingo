import { createAsyncThunk } from '@reduxjs/toolkit';
import { ref, child, get } from 'firebase/database';
import { database } from '../../Firebase';

export const getAllTeachers = createAsyncThunk(
  'teachers/getAllTeachers',
  async (_, thunkAPI) => {
    const dbRef = ref(database);

    try {
      const snapshot = await get(child(dbRef, '/'));

      if (snapshot.exists()) {
        const data = snapshot.val();

        const allTeachers = Object.values(data);

        return allTeachers;
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
