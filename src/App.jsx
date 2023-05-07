import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/page-layout';
import Home from './pages/home';
import AboutSchool from './pages/about-school';
import AboutTrainer from './pages/about-trainer';
import FirstLesson from './pages/first-lesson';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-school" element={<AboutSchool />} />
          <Route path="about-trainer" element={<AboutTrainer />} />
          <Route path="first-lesson" element={<FirstLesson />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
