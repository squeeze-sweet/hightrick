import styles from './page-layout.module.css';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import { useRef, useState, useCallback, useEffect } from 'react';

const Layout = ({ children }) => {
  const navElement = useRef(null);
  const scrollContainer = useRef(null);
  const [plugHeight, setPlugHeight] = useState('');

  useEffect(() => {
    if (!navElement?.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setPlugHeight(navElement.current.clientHeight);
    });
    resizeObserver.observe(navElement.current);
    return () => resizeObserver.disconnect(); // clean up
  }, [navElement?.current]);

  return (
    <section className={styles.page}>
      <div style={{ height: plugHeight, width: '100%' }}></div>

      <div ref={navElement} className={styles.navbar}>
        <Navigation container={scrollContainer.current} />
      </div>
      <main
        className={styles.content}
        style={{ height: `calc(100% - ${plugHeight}px)` }}
        ref={scrollContainer}
        id="scroll-continer"
      >
        {children}
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};

export default Layout;
