import styles from './Post.module.scss';

type Props = {
   name: string;
   body: string;
};

export const Post: React.FC<Props> = ({ name, body }) => {
   return (
      <div className={styles.container}>
         <span>
            <b>Name:</b> {name}
         </span>
         <div className={styles.body}>
            <b>Post:</b> {body}
         </div>
      </div>
   );
};
