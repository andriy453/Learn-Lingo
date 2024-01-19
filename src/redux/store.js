import { configureStore } from '@reduxjs/toolkit';
import {teachersReducer } from './teachers/teachersSlice.js'

export const store = configureStore({
  reducer: {

    teachers: teachersReducer,

  },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
});

