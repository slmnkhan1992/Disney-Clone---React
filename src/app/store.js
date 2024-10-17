import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/UserSlice';
import userSlice from '../features/user/UserSlice';


export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
