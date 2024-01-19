import { configureStore } from '@reduxjs/toolkit';
import {teachersReducer } from './Teachers/TeachersSlice'

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

