import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/started' element={<Blank />} />
                    <Route path='/calendar' element={<Blank />} />
                    <Route path='/order' element={<Blank />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    );
}

export default App;
