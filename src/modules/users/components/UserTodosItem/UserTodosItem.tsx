import cn from 'classnames';
import styles from './UserTodosItem.module.scss';

type Props = {
   title: string;
   completed: boolean;
};

export const UserTodosItem: React.FC<Props> = ({ title, completed }) => {
   return (
      <div
         className={cn(styles.container, {
            [styles.active]: completed,
         })}
      >
         <span className={styles.title}>
            <b>Title:</b> {title}
         </span>
         <span className={styles.completed}>
            <b>Completed:</b> {completed.toString()}
         </span>
      </div>
   );
};
