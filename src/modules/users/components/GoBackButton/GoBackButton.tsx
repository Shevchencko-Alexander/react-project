import { useNavigate } from 'react-router-dom';
import styles from './GoBackButton.module.scss';

export const GoBackButton: React.FC = () => {
   const navigate = useNavigate();

   const goBack = () => navigate(-1);

   return (
      <button className={styles.btn} onClick={goBack}>
         Go back to users
      </button>
   );
};
