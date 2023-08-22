import { Route, Routes } from 'react-router-dom';
import './style/App.css';
import './style/reset.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Header from './components/layout/Header';
import LoginPage from './pages/LoginPage';
import VipPage from './pages/VipPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/bout' element={<AboutPage />} />
        <Route path='/vip' element={<VipPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}
