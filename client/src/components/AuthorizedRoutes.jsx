import { Outlet, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/isAuthenticated';
const AuthorizedRoutes = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};
export default AuthorizedRoutes;