import Album1 from '../../../../assets/images/users/Album1.webp';
import Album2 from '../../../../assets/images/users/Album2.jpg';
import Album3 from '../../../../assets/images/users/Album3.webp';
import styles from './UserAlbumsItem.module.scss';

type Props = {
   title: string;
};

export const UserAlbumsItem: React.FC<Props> = ({ title }) => {
   return (
      <div className={styles.container}>
         <div className={styles.title}>
            <b>Title:</b> {title}
         </div>
         <div>
            <img className={styles.img} src={Album1} />
            <img className={styles.img} src={Album2} />
            <img className={styles.img} src={Album3} />
         </div>
      </div>
   );
};
