import styles from './UserInfoItem.module.scss';

type Props = {
   image: string;
   firstText?: string;
   secondText?: string;
   thirdText?: string;
   fourthText?: string;
   name: string;
};

export const UserInfoItem: React.FC<Props> = ({
   image,
   firstText,
   secondText,
   thirdText,
   fourthText,
   name,
}) => {
   return (
      <div className={styles.item}>
         <img src={image} className={styles.icon} />
         <div className={styles.info}>
            <p className={styles.text}>
               {firstText} {secondText ? secondText : null}
               <br />
               {thirdText ? thirdText : null}{' '}
               {fourthText ? `, ${fourthText}` : null}
            </p>
            <p className={styles.name}>{name}</p>
         </div>
      </div>
   );
};
