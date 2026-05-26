import { Navigate } from 'react-router-dom';
import { getUser } from '../helpers/local-storage';

export default function ProtectedRoute({ children, componente }) {
  const user = getUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return componente || children;
}
