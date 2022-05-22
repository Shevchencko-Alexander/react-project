import axios from 'axios';
import { Post, Todo, User, UserAlbum, UserPost, UserTodo } from '../types';

export const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const usersAPI = {
   getUsers() {
      return instance.get<User[]>(`users`).then((response) => {
         return response.data;
      });
   },
   getUserAlbums(id: number) {
      return instance
         .get<UserAlbum[]>(`users/${id}/albums`)
         .then((response) => {
            return response.data;
         });
   },
   getUserTodos(id: number) {
      return instance.get<UserTodo[]>(`users/${id}/todos`).then((response) => {
         return response.data;
      });
   },
   getUserPosts(id: number) {
      return instance.get<UserPost[]>(`users/${id}/posts`).then((response) => {
         return response.data;
      });
   },
   getTodos() {
      return instance.get<Todo[]>(`todos?userId=1`).then((response) => {
         return response.data;
      });
   },
   getPosts() {
      return instance.get<Post[]>(`posts/1/comments`).then((response) => {
         return response.data;
      });
   },
   setPost(payload: Post) {
      return instance.post<Post>(`posts`, { ...payload }).then((response) => {
         return response.data;
      });
   },
};
