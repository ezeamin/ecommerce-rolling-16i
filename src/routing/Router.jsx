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
        <Route path='/' element={<MainView />} />

        {/* Rutas no accesibles para usuario logueado */}
        <Route path='/' element={<AuthRoute />}>
          {/* Outlet */}
          <Route path='/login' element={<LoginView />} />
          {/* Fin outlet */}
        </Route>
        {/* Fin rutas no accesibles para usuario logueado */}

        {/* Rutas protegidas */}
        <Route path='/' element={<PrivateRoute />}>
          {/* Outlet */}
          <Route path='/admin' element={<AdminView />} />
          {/* Fin outlet */}
        </Route>
        {/* Fin rutas protegidas */}

        {/* Error 404 */}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
