import { Link } from 'react-router-dom';
import userAva from '../../../../assets/images/users/userAva.jpg';
import styles from './User.module.scss';

type Props = {
   email: string;
   userName: string;
   id: number;
};

export const User: React.FC<Props> = ({ email, userName, id }) => {
   return (
      <div className={styles.container}>
         <img className={styles.image} src={userAva} />
         <div className={styles.info}>
            <span className={styles.text}>
               <b>User name:</b> {userName}
            </span>
            <span className={styles.text}>
               <b>Email:</b> {email}
            </span>
            <span className={styles.text}>
               <Link className={styles.link} to={`/userlist/${id}`}>
                  Open user profile
               </Link>
            </span>
         </div>
      </div>
   );
};
