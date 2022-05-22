import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
   requestUserPosts,
   userPostsArray,
} from '../../../../reducers/usersReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { GoBackButton } from '../GoBackButton';
import { UserPostsItem } from '../UserPostsItem';
import styles from './UserPosts.module.scss';

export const UserPosts: React.FC = () => {
   const { id } = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const userPosts = useSelector(userPostsArray);

   useEffect(() => {
      dispatch(requestUserPosts(Number(id)!));
   }, [id]);

   return (
      <>
         {userPosts.length <= 0 ? <Preloader /> : null}
         <h1 className={styles.title}>User posts</h1>
         <GoBackButton />
         <div className={styles.container}>
            {userPosts.map((p) => (
               <UserPostsItem key={p.id} title={p.title} body={p.body} />
            ))}
         </div>
      </>
   );
};
