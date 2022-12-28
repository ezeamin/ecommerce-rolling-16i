import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import AdminView from '../views/Admin/AdminView';
import Error404 from '../views/Error/Error404';
import LoginView from '../views/Login/LoginView';
import MainView from '../views/Main/MainView';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Rutas protegidas */}
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/' element={<MainView />} />
          <Route path='/admin' element={<AdminView />} />
        </Route>

        {/* Rutas no accesibles para usuario logueado */}
        <Route path='/' element={<AuthRoute />}>
          <Route path='/login' element={<LoginView />} />
        </Route>

        {/* Error 404 */}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
