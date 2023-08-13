import styles from './page-layout.module.css';
import Navigation from '../navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import { useRef, useState, useCallback, useEffect } from 'react';

const Layout = ({ children }) => {
  const navElement = useRef(null);
  const footerElement = useRef(null);
  const scrollContainer = useRef(null);
  const [plugHeight, setPlugHeight] = useState('');
  const [footerHeight, setFooterHeight] = useState('');

  useEffect(() => {
    if (!navElement?.current) return;
    const resizeObserver = new ResizeObserver(() => {
      setPlugHeight(navElement.current.clientHeight);
    });
    const resizeFooterObserver = new ResizeObserver(() => {
      setFooterHeight(footerElement.current.clientHeight);
    });
    resizeObserver.observe(navElement.current);
    resizeFooterObserver.observe(navElement.current);
    return () => {
      resizeObserver.disconnect();
      resizeFooterObserver.disconnect();
    }; // clean up
  }, [navElement?.current, footerElement?.current]);

  return (
    <section className={styles.page}>
      <div style={{ height: plugHeight, width: '100%' }}></div>

      <div ref={navElement} className={styles.navbar}>
        <Navigation container={scrollContainer.current} />
      </div>
      <main
        className={styles.content}
        style={{ height: `calc(100% - ${plugHeight}px - ${footerHeight}px)` }}
        ref={scrollContainer}
        id="scroll-continer"
      >
        {children}
        <Outlet />
      </main>
      <div ref={footerElement}>
        <Footer />
      </div>
    </section>
  );
};

export default Layout;
