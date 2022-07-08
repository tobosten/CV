import './App.css';
import CV from './CV/CV';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path="/" element={<CV />} />
      </Routes>
  );
}



export default App;
