
import { Navigate, Route,  redirect } from 'react-router-dom';

interface Props {
  hasPermission: boolean;
  component: any;
  path: string;
}

//TODO: Update the types from any to proper type
export default function PrivateRoute({hasPermission, children}:any): any {
  if (!hasPermission) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
}
