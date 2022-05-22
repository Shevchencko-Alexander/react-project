import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import postsReducer from '../reducers/postsReducer';
import todosReducer from '../reducers/todosReducer';
import usersReducer from '../reducers/usersReducer';

export const store = configureStore({
   reducer: {
      users: usersReducer,
      todos: todosReducer,
      posts: postsReducer,
   },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;
