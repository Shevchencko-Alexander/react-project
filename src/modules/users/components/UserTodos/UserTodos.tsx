import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
   requestUserTodos,
   userTodosArray,
} from '../../../../reducers/usersReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { GoBackButton } from '../GoBackButton';
import { UserTodosItem } from '../UserTodosItem';
import styles from './UserTodos.module.scss';

export const UserTodos: React.FC = () => {
   const { id } = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const userTodos = useSelector(userTodosArray);

   useEffect(() => {
      dispatch(requestUserTodos(Number(id)!));
   }, [id]);

   return (
      <>
         {userTodos.length <= 0 ? <Preloader /> : null}
         <h1 className={styles.title}>User todos</h1>
         <GoBackButton />
         <div className={styles.container}>
            {userTodos.map((t) => (
               <UserTodosItem
                  key={t.id}
                  title={t.title}
                  completed={t.completed}
               />
            ))}
         </div>
      </>
   );
};
