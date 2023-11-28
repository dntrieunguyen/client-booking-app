import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { DefaultLayout } from './layout';
import { Detail, Home, Login, Register, Search } from './pages';

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
