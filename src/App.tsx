import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/IndexPage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;