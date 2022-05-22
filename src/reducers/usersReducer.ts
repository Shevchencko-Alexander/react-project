import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { AppThunk, RootState } from '../store/store';
import { User, UserAlbum, UserPost, UserTodo } from '../types';

export interface UsersState {
   value: User[];
   userAlbums: UserAlbum[];
   userTodos: UserTodo[];
   userPosts: UserPost[];
}

const initialState: UsersState = {
   value: [],
   userAlbums: [],
   userTodos: [],
   userPosts: [],
};

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      setUsers: (state, action: PayloadAction<User[]>) => {
         state.value = [...action.payload];
      },
      setUserAlbums: (state, action: PayloadAction<UserAlbum[]>) => {
         state.userAlbums = [...action.payload];
      },
      setUserTodos: (state, action: PayloadAction<UserTodo[]>) => {
         state.userTodos = [...action.payload];
      },
      setUserPosts: (state, action: PayloadAction<UserPost[]>) => {
         state.userPosts = [...action.payload];
      },
   },
});

export const requestUsers = (): AppThunk => async (dispatch) => {
   const data = await usersAPI.getUsers();
   dispatch(setUsers(data));
};

export const requestUserAlbums =
   (id: number): AppThunk =>
   async (dispatch) => {
      const data = await usersAPI.getUserAlbums(id);
      dispatch(setUserAlbums(data));
   };

export const requestUserTodos =
   (id: number): AppThunk =>
   async (dispatch) => {
      const data = await usersAPI.getUserTodos(id);
      dispatch(setUserTodos(data));
   };

export const requestUserPosts =
   (id: number): AppThunk =>
   async (dispatch) => {
      const data = await usersAPI.getUserPosts(id);
      dispatch(setUserPosts(data));
   };

export const { setUsers, setUserAlbums, setUserTodos, setUserPosts } =
   usersSlice.actions;

export const usersArray = (state: RootState) => state.users.value;
export const userAlbumsArray = (state: RootState) => state.users.userAlbums;
export const userTodosArray = (state: RootState) => state.users.userTodos;
export const userPostsArray = (state: RootState) => state.users.userPosts;

export default usersSlice.reducer;
