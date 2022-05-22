import styles from './UserPostsItem.module.scss';

type Props = {
   title: string;
   body: string;
};

export const UserPostsItem: React.FC<Props> = ({ title, body }) => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>
            <b>Title:</b> {title}
         </div>
         <div className={styles.body}>
            <b>Post: </b> {body}
         </div>
      </div>
   );
};
