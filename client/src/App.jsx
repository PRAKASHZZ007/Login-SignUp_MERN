import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  const handleLogout = () => setIsAuthenticated(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route
          path='/home'
          element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to='/login' />}
        />
        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
