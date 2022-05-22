import { useDispatch } from 'react-redux';
import { toggleCompleted } from '../../../../reducers/todosReducer';
import { AppDispatch } from '../../../../store/store';
import cn from 'classnames';
import styles from './Todo.module.scss';

type Props = {
   title: string;
   completed: boolean;
   id: number;
};

export const Todo: React.FC<Props> = ({ title, completed, id }) => {
   const dispatch = useDispatch<AppDispatch>();

   const handleClick = (e: React.MouseEvent) => {
      const target = e.currentTarget as HTMLElement;
      dispatch(toggleCompleted(Number(target.id)));
   };

   return (
      <div
         onClick={handleClick}
         id={id.toString()}
         className={cn(styles.container, {
            [styles.active]: completed,
         })}
      >
         <span>
            <b>Task:</b> {title}
         </span>
         <span>
            <b>completed:</b> {completed.toString()}
         </span>
      </div>
   );
};
