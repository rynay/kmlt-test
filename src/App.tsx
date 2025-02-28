import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard';
import Results from './pages/Results';
import Finalize from './pages/Finalize';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/results/:id" element={<Results />} />
      <Route path="/finalize/:id" element={<Finalize />} />
    </Routes>
  );
}

export default App;
