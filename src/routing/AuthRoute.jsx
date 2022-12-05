import { Navigate, Outlet } from 'react-router-dom';

const AuthRoute = () => {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    return isLoggedIn ? <Navigate to='/admin' /> : <Outlet />;
}

export default AuthRoute