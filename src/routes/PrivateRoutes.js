import useAuthContext from 'auth/hook/useAuthContext';
import { Navigate, Outlet } from '../../node_modules/react-router-dom/dist/index';

function PrivateRoutes() {
  const { token } = useAuthContext();
  if (!token) return <Navigate to="/login" />;
  return <Outlet />;
}

export default PrivateRoutes;
