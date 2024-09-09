import { useQuery } from '@tanstack/react-query';
import { Outlet, Navigate } from 'react-router-dom';
import { getMyInformation } from '../api/authApi';
import Loading from '../components/Loading';

function ProtectedRoute() {
  const authToken = localStorage.getItem('authToken');
  const { data, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: () => getMyInformation(authToken),
    retry: 1,
    enabled: Boolean(authToken),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!authToken || (isError && !data)) {
    localStorage.removeItem('authToken');
    console.clear();
    return <Navigate to='/' replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
