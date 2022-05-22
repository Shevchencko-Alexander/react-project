import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsArray, requestPosts } from '../../../../reducers/postsReducer';
import { AppDispatch } from '../../../../store/store';
import { Preloader } from '../../../common/Preloader';
import { AddPost } from '../../components/AddPost';
import { Post } from '../../components/Post';
import styles from './PostsList.module.scss';

export const PostsList = () => {
   const dispatch = useDispatch<AppDispatch>();
   const posts = useSelector(postsArray);
   const refs = useRef<HTMLDivElement>(null);

   useEffect(() => {
      dispatch(requestPosts());
   }, []);

   useEffect(() => {
      refs.current!.scrollTop = refs.current!.scrollHeight;
   });

   return (
      <>
         {posts.length <= 0 ? <Preloader /> : null}
         <div ref={refs} className={styles.container}>
            {posts.map((p) => (
               <Post key={p.id} name={p.name} body={p.body} />
            ))}
         </div>
         <AddPost />
      </>
   );
};
