import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<DefaultLayout />}>
               <Route index element={<Home />} />
               <Route path="search" element={<Search />} />
               <Route path="detail" element={<Detail />} />
               <Route path="login" element={<Login />} />
               <Route path="register" element={<Register />} />
            </Route>
         </Routes>
      </Router>
   );
}

export default App;
