import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestTodos, todosArray } from '../../../../reducers/todosReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { Todo } from '../../components/Todo';
import styles from './TodoList.module.scss';

export const TodoList = () => {
   const dispatch = useDispatch<AppDispatch>();
   const todos = useSelector(todosArray);

   useEffect(() => {
      dispatch(requestTodos());
   }, []);

   return (
      <>
         {todos.length <= 0 ? <Preloader /> : null}
         <div className={styles.container}>
            {todos.map((t) => (
               <Todo
                  id={t.id}
                  title={t.title}
                  completed={t.completed}
                  key={t.id}
               />
            ))}
         </div>
      </>
   );
};
