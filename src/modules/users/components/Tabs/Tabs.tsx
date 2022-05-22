import cn from 'classnames';
import styles from './Tabs.module.scss';

export type Tab = {
   userInfo: string;
   userAlbums: string;
   userTodos: string;
   userPosts: string;
};

type Props = {
   selectedTab: string;
   tabs: Tab;
   onClick: (tab: string) => void;
};

export const Tabs: React.FC<Props> = ({ selectedTab, tabs, onClick }) => {
   return (
      <div className={styles.container}>
         {tabs &&
            Object.values(tabs).map((tab, index) => (
               <div
                  className={cn(styles.tab, {
                     [styles.tab__active]: tab === selectedTab,
                  })}
                  key={index}
                  onClick={() => onClick(tab)}
               >
                  <div
                     className={cn(styles.name, {
                        [styles.name__active]: tab === selectedTab,
                     })}
                  >
                     {tab}
                  </div>
               </div>
            ))}
      </div>
   );
};
