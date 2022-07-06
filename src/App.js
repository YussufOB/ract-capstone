import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/pages/Details';
import List from './components/pages/List';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/list" element={<List />} />
    <Route path="/details" element={<Details />} />
  </Routes>
);

export default App;
