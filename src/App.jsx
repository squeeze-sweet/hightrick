import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/page-layout';
import Home from './pages/home';
import AboutSchool from './pages/about-school';

// About Trained page component
const AboutTrainedPage = () => <h1>About Trainer Page</h1>;

// First Lesson page component
const FirstLessonPage = () => <h1>First Lesson Page</h1>;

// Layout componen

// App component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-school" element={<AboutSchool />} />
          <Route path="about-trainer" element={<AboutTrainedPage />} />
          <Route path="first-lesson" element={<FirstLessonPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
