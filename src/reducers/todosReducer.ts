import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { usersAPI } from '../api/api';
import { AppThunk, RootState } from '../store/store';
import { Todo } from '../types';

export interface TodosState {
   value: Todo[];
}

const initialState: TodosState = {
   value: [],
};

export const todosSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      setTodos: (state, action: PayloadAction<Todo[]>) => {
         state.value = [...action.payload];
      },
      toggleCompleted: (state, action: PayloadAction<number>) => {
         state.value.forEach((elem) => {
            if (elem.id === action.payload) {
               elem.completed = !elem.completed;
            }
         });
      },
   },
});

export const requestTodos = (): AppThunk => async (dispatch) => {
   const data = await usersAPI.getTodos();
   dispatch(setTodos(data));
};

export const { setTodos, toggleCompleted } = todosSlice.actions;

export const todosArray = (state: RootState) => state.todos.value;

export default todosSlice.reducer;
