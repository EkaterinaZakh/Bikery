import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type StoreT = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
