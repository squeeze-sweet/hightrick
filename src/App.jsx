import { useState } from 'react';
import { Element } from 'react-scroll';
import Layout from './components/page-layout';
import Home from './pages/home';
import AboutSchool from './pages/about-school';
import AboutTrainer from './pages/about-trainer';
import FirstLesson from './pages/first-lesson';

const App = () => {
  const [activNavLink, setActivNavLink] = useState('');
  return (
    <Layout activNavLink={activNavLink}>
      <Element name="home">
        <Home setActivNavLink={setActivNavLink} />
      </Element>
      <Element name="about-school">
        <AboutSchool setActivNavLink={setActivNavLink} />
      </Element>
      <Element name="about-trainer">
        <AboutTrainer setActivNavLink={setActivNavLink} />
      </Element>
      <Element name="first-lesson">
        <FirstLesson setActivNavLink={setActivNavLink} />
      </Element>
    </Layout>
  );
};

export default App;
