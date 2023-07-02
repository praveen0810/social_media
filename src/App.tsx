import { BrowserRouter as Router } from 'react-router-dom';

import PrivateLayout from './layouts/PrivateLayout';
import PublicLayout from './layouts/PublicLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.scss'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateLayout> <Home /> </PrivateLayout>} />
        <Route path="/profile" element={<PrivateLayout> <Profile /> </PrivateLayout>} />
        <Route path="/login" element={<PublicLayout> <Login /> </PublicLayout>} />
        <Route path="/sign-up" element={<PublicLayout> <SignUp /> </PublicLayout>} />

        {/* Add more routes here */}
      </Routes>
    </Router>

  );
};

export default App;
