import { configureStore } from '@reduxjs/toolkit';
import festReducer from './slices/fest/slice';



export const store = configureStore({
  reducer: {
    festivals: festReducer,
  },
});

export type StoreT = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
