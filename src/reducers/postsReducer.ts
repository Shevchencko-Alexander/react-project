import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { AppThunk, RootState } from '../store/store';
import { Post } from '../types';

export interface PostsState {
   value: Post[];
}

const initialState: PostsState = {
   value: [],
};

export const postsSlice = createSlice({
   name: 'posts',
   initialState,
   reducers: {
      setPosts: (state, action: PayloadAction<Post[]>) => {
         state.value = [...action.payload];
      },
      setNewPost: (state, action: PayloadAction<Post>) => {
         state.value = [...state.value, action.payload];
      },
   },
});

export const requestPosts = (): AppThunk => async (dispatch) => {
   const data = await usersAPI.getPosts();
   dispatch(setPosts(data));
};

export const requestAddPosts =
   (payload: Post): AppThunk =>
   async (dispatch) => {
      const data = await usersAPI.setPost(payload);
      dispatch(setNewPost(data));
   };

export const { setPosts, setNewPost } = postsSlice.actions;

export const postsArray = (state: RootState) => state.posts.value;

export default postsSlice.reducer;
