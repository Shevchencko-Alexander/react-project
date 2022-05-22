import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { requestUsers, usersArray } from '../../../../reducers/usersReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { User } from '../../components/User';
import styles from './UserList.module.scss';

export const UserList = () => {
   const dispatch = useDispatch<AppDispatch>();
   const users = useSelector(usersArray);

   useEffect(() => {
      dispatch(requestUsers());
   }, []);

   return (
      <>
         {users.length <= 0 ? <Preloader /> : null}
         <div className={styles.container}>
            {users.map((u) => (
               <User
                  email={u.email}
                  userName={u.username}
                  id={u.id}
                  key={u.id}
               />
            ))}
            <Outlet />
         </div>
      </>
   );
};
