import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
   requestUserAlbums,
   userAlbumsArray,
} from '../../../../reducers/usersReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { GoBackButton } from '../GoBackButton';
import { UserAlbumsItem } from '../UserAlbumsItem';
import styles from './UserAlbums.module.scss';

export const UserAlbums: React.FC = () => {
   const { id } = useParams();
   const dispatch = useDispatch<AppDispatch>();
   const userAlbums = useSelector(userAlbumsArray);

   useEffect(() => {
      dispatch(requestUserAlbums(Number(id)!));
   }, [id]);

   return (
      <>
         {userAlbums.length <= 0 ? <Preloader /> : null}
         <h1 className={styles.title}>User albums</h1>
         <GoBackButton />
         <div className={styles.container}>
            {userAlbums.map((a) => (
               <UserAlbumsItem key={a.id} title={a.title} />
            ))}
         </div>
      </>
   );
};
