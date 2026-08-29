import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';

// Components
import Navbar from './components/Navbar';
import PageTransition from './components/PageTransition';
import Starfield from './components/Starfield';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const direction = useRef(1);

  const ROUTE_ORDER = {
    '/': 0,
    '/about': 1,
    '/education': 2,
    '/skills': 3,
    '/projects': 4,
    '/achievements': 5,
    '/dashboard': 6,
    '/contact': 7
  };

  if (prevPath.current !== location.pathname) {
    const prevIdx = ROUTE_ORDER[prevPath.current] ?? 0;
    const currIdx = ROUTE_ORDER[location.pathname] ?? 0;
    direction.current = currIdx > prevIdx ? 1 : -1;
    prevPath.current = location.pathname;
  }

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)} custom={direction.current}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition direction={direction.current}><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition direction={direction.current}><About /></PageTransition>} />
        <Route path="/education" element={<PageTransition direction={direction.current}><Education /></PageTransition>} />
        <Route path="/skills" element={<PageTransition direction={direction.current}><Skills /></PageTransition>} />
        <Route path="/projects" element={<PageTransition direction={direction.current}><Projects /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition direction={direction.current}><Achievements /></PageTransition>} />
        <Route path="/dashboard" element={<PageTransition direction={direction.current}><Dashboard /></PageTransition>} />
        <Route path="/contact" element={<PageTransition direction={direction.current}><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Starfield />
          <Navbar />
          
          <main className="main-content">
            <AnimatedRoutes />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
