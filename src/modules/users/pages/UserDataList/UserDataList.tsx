import styles from './UserDataList.module.scss';
import { useState } from 'react';
import { Tabs } from '../../components/Tabs';
import { Tab } from '../../components/Tabs/Tabs';
import { UserInfo } from '../../components/UserInfo';
import { UserAlbums } from '../../components/UserAlbums';
import { UserTodos } from '../../components/UserTodos';
import { UserPosts } from '../../components/UserPosts';

export const UserDataList: React.FC = () => {
   const tabs: Tab = {
      userInfo: 'User info',
      userAlbums: 'User albums',
      userTodos: 'User todos',
      userPosts: 'User posts',
   };

   const [selectedTab, setSelectedTab] = useState<string>(tabs.userInfo);

   const handleTabClick = (tab: string) => {
      setSelectedTab(tab);
   };

   return (
      <div className={styles.popup}>
         <div className={styles.container}>
            <Tabs
               selectedTab={selectedTab}
               tabs={tabs}
               onClick={handleTabClick}
            />
            {selectedTab === tabs.userInfo && <UserInfo />}
            {selectedTab === tabs.userAlbums && <UserAlbums />}
            {selectedTab === tabs.userTodos && <UserTodos />}
            {selectedTab === tabs.userPosts && <UserPosts />}
         </div>
      </div>
   );
};
