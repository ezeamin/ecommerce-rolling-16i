import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

import AdminView from '../views/Admin/AdminView';
import Error404 from '../views/Error/Error404';
import MainView from '../views/Main/MainView';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainView />} />
        <Route path='/admin' element={<AdminView />} />

        {/* Error 404 */}
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

// BrowserRouter > Routes > Route
