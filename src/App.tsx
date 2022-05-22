import './App.scss';
import { Navigation } from './modules/common/Navigation';
import { Routes, Route } from 'react-router-dom';
import { PostsList } from './modules/posts/pages/PostsList';
import { TodoList } from './modules/todos/pages/TodoList';
import { UserList } from './modules/users/pages/UserList';
import { UserDataList } from './modules/users/pages/UserDataList';
import { HomePage } from './modules/home/pages';

function App() {
   return (
      <div className='App'>
         <Routes>
            <Route path='/' element={<Navigation />}>
               <Route index element={<HomePage />} />
               <Route path='userlist' element={<UserList />}>
                  <Route path=':id' element={<UserDataList />} />
               </Route>
               <Route path='postlist' element={<PostsList />} />
               <Route path='todolist' element={<TodoList />} />
               <Route path='*' element={<div>404 not found</div>} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
