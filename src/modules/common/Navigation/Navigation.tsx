import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.scss';

export const Navigation = () => {
   const setActive = ({ isActive }: { isActive: boolean }) =>
      isActive ? styles.active : styles.link;

   return (
      <>
         <header className={styles.header}>
            <nav>
               <ul className={styles.list}>
                  <li>
                     <NavLink to='/' className={setActive}>
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='userlist' className={setActive}>
                        Users
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='postlist' className={setActive}>
                        Posts
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to='todolist' className={setActive}>
                        Todos
                     </NavLink>
                  </li>
               </ul>
            </nav>
         </header>
         <main className={styles.main}>
            <Outlet />
         </main>
         <footer className={styles.footer}>
            <p className={styles.text}>React application 2022</p>
         </footer>
      </>
   );
};
