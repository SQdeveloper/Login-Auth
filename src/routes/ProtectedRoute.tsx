import { useAuth } from '../Context/AuthProvider';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {    
    const {isAuthenticated} = useAuth();    
    
    return isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>
};

export default ProtectedRoute;