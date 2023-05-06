import styles from './page-content.module.css';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';

const Layout = ({ children }) => (
  <section className={styles.page}>
    <Navigation />
    <main className={styles.content}>
      {children}
      <Outlet />
    </main>
    <Footer />
  </section>
);

export default Layout;
