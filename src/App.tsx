import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/IndexPage';
import Contact from './pages/ContactPage';
function App() {
 return (
    <Router>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
 );
}
export default App;