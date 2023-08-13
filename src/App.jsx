import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/page-layout';
import Home from './pages/home';
import AboutSchool from './pages/about-school';
import AboutTrainer from './pages/about-trainer';
import FirstLesson from './pages/first-lesson';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <Layout>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about-school">
        <AboutSchool />
      </Element>
      <Element name="about-trainer">
        <AboutTrainer />
      </Element>
      <Element name="first-lesson">
        <FirstLesson />
      </Element>
    </Layout>
  );
};

export default App;
