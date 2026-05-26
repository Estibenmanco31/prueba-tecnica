import { Navigate } from 'react-router-dom';
import { getUser } from './helpers/local-storage';

export default function App() {
  const user = getUser();
  return <Navigate to={user ? "/panel" : "/login"} replace />;
}