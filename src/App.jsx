import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/page-layout';
import Home from './pages/home';
// Main page component
const MainPage = () => <h1>Main Page</h1>;

// About School page component
const AboutSchoolPage = () => <h1>About School Page</h1>;

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
          <Route path="about-school" element={<AboutSchoolPage />} />
          <Route path="about-trainer" element={<AboutTrainedPage />} />
          <Route path="first-lesson" element={<FirstLessonPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
