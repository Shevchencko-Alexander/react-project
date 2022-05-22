import { useParams } from 'react-router-dom';
import userAva from '../../../../assets/images/users/userAva.jpg';
import email from '../../../../assets/images/users/email.svg';
import phone from '../../../../assets/images/users/phone.svg';
import locationDot from '../../../../assets/images/users/locationDot.svg';
import insta from '../../../../assets/images/users/insta.svg';
import work from '../../../../assets/images/users/work.svg';
import person from '../../../../assets/images/users/person.svg';
import { useSelector } from 'react-redux';
import { usersArray } from '../../../../reducers/usersReducer';
import { useMemo } from 'react';
import { User } from '../../../../types';
import styles from './UserInfo.module.scss';
import { UserInfoItem } from '../UserInfoItem';
import { GoBackButton } from '../GoBackButton';

export const UserInfo: React.FC = () => {
   const { id } = useParams();
   const users = useSelector(usersArray);

   const currentUser = useMemo<User | undefined>(
      () => users.find((user) => user.id === Number(id)),
      [id]
   );

   return (
      <>
         <div className={styles.item}>
            <img src={userAva} className={styles.image} />
         </div>
         <GoBackButton />
         <UserInfoItem
            image={person}
            firstText={currentUser?.name}
            name={'Name'}
         />
         <UserInfoItem
            image={email}
            firstText={currentUser?.email}
            name={'Email'}
         />
         <UserInfoItem
            image={phone}
            firstText={currentUser?.phone}
            name={'Mobile'}
         />
         <UserInfoItem
            image={locationDot}
            firstText={currentUser?.address.street}
            secondText={currentUser?.address.suite}
            thirdText={currentUser?.address.city}
            fourthText={currentUser?.address.zipcode}
            name={'Address'}
         />
         <UserInfoItem
            image={insta}
            firstText={currentUser?.website}
            name={'Website'}
         />
         <UserInfoItem
            image={work}
            firstText={currentUser?.company.name}
            thirdText={currentUser?.company.bs}
            name={'Work'}
         />
      </>
   );
};
