import styles from './page-content.module.css';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => (
  <section className={styles.page}>
    <Navigation />
    <main className={styles.content}>
      {children}
      <Outlet />
    </main>
  </section>
);

export default Layout;
