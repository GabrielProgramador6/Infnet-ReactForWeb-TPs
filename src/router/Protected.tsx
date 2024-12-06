import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
	const session = localStorage.getItem('session');

	return session ? <Outlet /> : <Navigate to="/signin" />;
}
